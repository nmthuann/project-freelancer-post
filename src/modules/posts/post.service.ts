import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDto } from './post-dto/post.dto'
import { Post } from './post.entity';
import { IJobPostService } from '../job-post/jobPost.service.interface';
import { ICategoryDetailService } from '../category-detail/categoryDetail.service.interface';
import { IJobPostDetailService } from '../job-post-detail/jobPostDetail.service.interface';
import { JobPostDto } from '../job-post/job-post-dto/jobPost.dto';
import { JobPostDetailDto } from '../job-post-detail/job-post-detail-dto/jobPostDetail.dto';
import { CategoryDetailDto } from '../category-detail/category-detail-dto/categoryDetail.dto';
import { PostOrderDto } from './post-dto/post-order.dto';
import { PostCustomDto } from './post-dto/post-custom.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
    @Inject('ICategoryDetailService')
    private categoryDetailService: ICategoryDetailService,
    @Inject('IJobPostService')
    private jobPostService: IJobPostService,
    @Inject('IJobPostDetailService')
    private jobPostDetailService: IJobPostDetailService,
  ) {}

  async getPosts(): Promise<Post[]> {
    try {
      const posts = await this.postModel.find();
      return posts;
    } catch (err) {
      throw new Error(`Failed to get posts: ${err}`);
    }
  }

  async createPost(email: string, postDto: PostDto): Promise<PostDto| any> {

    // const freelancerName = 
    // await this.postApiGatewayService.handleAuthServiceMessage(email);
    // if (freelancerName == 'Fail'){
    //   return new HttpException('Create Fail', HttpStatus.NOT_FOUND);
    // }

    try {
      
      // check name category is exsit
      const getNameCategoryDetail: CategoryDetailDto = 
      await this.categoryDetailService.getIdByCategoryDetailName(postDto.category_detail_name);
      console.log("test - getNameCategoryDetail: ", getNameCategoryDetail);

      // NoSQL
      const newPost = new this.postModel(postDto);


      const newJobPost = new JobPostDto(
        getNameCategoryDetail,
        postDto.post_name,
      );
      console.log("test - newJobPost: ", newJobPost);

      const createdJobPost = await this.jobPostService.createOne(newJobPost);
      console.log("test - createdJobPost: ", createdJobPost)
      

      const newJobPostDetail = new JobPostDetailDto(
        createdJobPost,
        email,// await freelancerName,
        postDto.post_detail.description,
        postDto.post_detail.FAQ
      );
      console.log("test - newJobPostDetail: ", newJobPostDetail)

      const createOneJPDetail = await this.jobPostDetailService.createOne(newJobPostDetail);
      console.log("test - createOneJPDetail: ", createOneJPDetail)  
      
      newPost.post_id = createdJobPost.job_post_id;
       return await newPost.save();
      
      //return  {message: "success Post failed"}
    } catch (error) {
      return {message: `${error}`};
    }
   
  }

  async findPostById(postId: number): Promise<PostDto> {
    const post = await this.postModel.findOne({post_id: postId})
    return post;
  }

  async getPostByEmail(email: string): Promise<PostDto[]>{
    const getPostByEmail = await this.postModel.find({'post_detail.profile_user': email});
    return getPostByEmail;
  }

  async getPostsByCategoryDetailId(category_detail_id: number): Promise<PostCustomDto[]> {
    // const posts = await this.postModel.find();
    const jobPost = await this.jobPostService.getPostsByCategoryDetailId(category_detail_id);
    const jobPostIds = jobPost.map(post => post.job_post_id);
    const posts = await this.postModel.find({ post_id: { $in: jobPostIds } })
    //.select('post_name category_detail_name vote post_detail.packages.package_detail.unit_price')
    // .exec();
        const modifiedPosts = posts.map(post => ({
      post_id: post.post_id,
      post_name: post.post_name,
      price: post.post_detail.packages[0].package_detail.unit_price,
      description: post.post_detail.description,
      profile_user: post.post_detail.profile_user
    }));
    return modifiedPosts;
    //return posts;
  }

  async getPostList(): Promise<PostCustomDto[]> {
  try {
    const posts = await this.postModel.find();
    const modifiedPosts = posts.map(post => ({
      post_name: post.post_name,
      price: post.post_detail.packages[0].package_detail.unit_price,
      description: post.post_detail.description,
      profile_user: post.post_detail.profile_user
    }));
    return modifiedPosts;
  } catch (err) {
    throw new Error(`Failed to get posts: ${err}`);
  }
}

  async getPostForOrder(data: any): Promise<PostOrderDto>{
    const postOrderDto: PostOrderDto = {
      post_id: 0,
      profile_user: 'example@mail.com',
      total_price: 0.00
    }
    return postOrderDto;
  }



  async updatePost(id:number,  email:string, postDto: PostDto): Promise<PostDto | any> {
    try {
      const check_post = this.postModel.findOne({
        where: {
          post_id: id,
          "post_detail.profile_user": email
        }
      })
       
      console.log("check_post", check_post);
      if(!check_post){
        throw new Error('id hoặc profile không tồn tại !!')
      }
      else{
        const updatePostDocument = await this.postModel.updateOne(
                    (await this.postModel.findOne({ post_id: id})), 
                    postDto
                );

        console.log( await this.postModel.findOne({ post_id: id }))
        return await this.postModel.findOne({ post_id: id });
      }
    } catch (error) {
      return {messgae: "update Post failed"}
    }
  }

}













 // /**
    //  * update theo id
    //  * check id đó có tồn tại trong document không?
    //  * nếu tồn tại người sửa có phải chủ ID không?
    //  * sửa cái thuộc tính sau:   
    //  * job_post_id: number;
    //  * job_name: string;
    //  * categoryDetail: string;
    //  * vote: number; (KHỒN)
    //  * job_post_detail:
    //  * profile_name: string; (KHÔNG)
    //  * packages: PackageDto[];
    //  * description: string;
    //  * FAQ: string;};
    //  * sửa ngày updated
    //  * không được sửa id, ....
    //  *
    //  * có tồn tại
    //  * sửa ở 2 phía
    //  */
    

    //   // check name category is exsit
      //   const getNameCategoryDetail: CategoryDetailDto = 
      //   await this.categoryDetailService.getIdByCategoryDetailName(postDto.category_detail_name);
      //   console.log("test - getNameCategoryDetail: ", getNameCategoryDetail);


      //   const newJobPost = new JobPostDto(
      //     getNameCategoryDetail,
      //     postDto.post_name,
      //   );
      //   console.log("test - newJobPost: ", newJobPost);
      //   const  updatedJobPost = await this.jobPostService.updateOneById(id, newJobPost);
      //   console.log("test - createdJobPost: ", updatedJobPost)
      

      // const newJobPostDetail = new JobPostDetailDto(
      //   updatedJobPost,
      //   email,
      //   postDto.post_detail.description,
      //   postDto.post_detail.FAQ
      // );
      // console.log("test - newJobPostDetail: ", newJobPostDetail)

      // const updatedJPDetail = await this.jobPostDetailService.updateOneById((await this.),newJobPostDetail);
      // console.log("test - createOneJPDetail: ", createOneJPDetail)  
      
      // newPost.post_id = createdJobPost.job_post_id;

        // update Package
        // const updatePostDocument = await this.postModel.findOneAndUpdate(
        //   ((await this.postModel.findOne({ post_id: id}))),
          
        // );

        // var updatePost: PostDto = {
        //   post_id: 0,
        //   post_name: '',
        //   category_detail_name: '',
        //   vote: 0,
        //   post_detail: new PostDetailDto
        // }




    //   // Xử lý ở Phía SQL
    //   const jobPost = new JobPostDto();
    //   jobPost.category_detail = (await (this.categoryDetailService.getByCategoryDetailId(
    //     await this.categoryDetailService.getIdByCategoryDetailName(postDto.categoryDetail))));
    //   jobPost.job_post_name = postDto.job_name;
    //   jobPost.vote = 0;
    //   const job_post_id = (await this.jobPostService.getLastJobPost()).job_post_id +1;
    //   console.log("Job post id:",job_post_id);
    //   await this.jobPostService.createJobPost(jobPost);

    //   const jobPostDetail = new JobPostDetailDto();
    //   console.log(" JobPostDetailDto");
    //   jobPostDetail.job_post = (await (this.jobPostService.getJobPostById(job_post_id)));
    //   console.log(" JobPostDetai: ",  (await (this.jobPostService.getJobPostById(job_post_id))));
    //   //jobPostDetail.job_post.job_post_id = job_post_id;
    //   jobPostDetail.profile_id = 1;// fixx ở đây
    //   jobPostDetail.description = postDto.job_post_detail.description;
    //   jobPostDetail.FAQ = postDto.job_post_detail.FAQ;
    //   this.jobPostDetailService.createJobPostDetail(jobPostDetail);


    // const createdPost = new this.postModel();
    // createdPost.jobPostId = (await this.jobPostService.getLastJobPost()).job_post_id //((await this.jobPostService.getJobPosts()).length) + 1;
    // createdPost.jobName = postDto.job_name;
    // createdPost.categoryDetailName = postDto.categoryDetail;
    // createdPost.vote = 0
    // createdPost.jobPostDetail = {} as any
    // createdPost.jobPostDetail.profileName = postDto.job_post_detail.profile_name
    // createdPost.jobPostDetail.description = postDto.job_post_detail.description
    // createdPost.jobPostDetail.FAQ = postDto.job_post_detail.FAQ
    // createdPost.jobPostDetail.package =  new Array(3);
    // const obj1 = {
    //   package_id: postDto.job_post_detail.packages[0].package_id,
    //   package_name: postDto.job_post_detail.packages[0].package_name,
    //   packageDetail: {
    //     'revision': postDto.job_post_detail.packages[0].packageDetail.revision ,
    //     'unitPrice': postDto.job_post_detail.packages[0].packageDetail.unit_price,
    //     'deliveryDay': postDto.job_post_detail.packages[0].packageDetail.deliveryDay
    // }};

    // const obj2 = {
    //   package_id: postDto.job_post_detail.packages[1].package_id,
    //   package_name: postDto.job_post_detail.packages[1].package_name,
    //   packageDetail: {
    //     'revision': postDto.job_post_detail.packages[1].packageDetail.revision ,
    //     'unitPrice': postDto.job_post_detail.packages[1].packageDetail.unit_price,
    //     'deliveryDay': postDto.job_post_detail.packages[1].packageDetail.deliveryDay
    // }};

    // const obj3 = {
    //   package_id: postDto.job_post_detail.packages[2].package_id,
    //   package_name: postDto.job_post_detail.packages[2].package_name,
    //   packageDetail: {
    //     'revision': postDto.job_post_detail.packages[2].packageDetail.revision ,
    //     'unitPrice': postDto.job_post_detail.packages[2].packageDetail.unit_price,
    //     'deliveryDay': postDto.job_post_detail.packages[2].packageDetail.deliveryDay
    // }};


    // createdPost.jobPostDetail.package[0] = obj1;
    // createdPost.jobPostDetail.package[1] = obj2;
    // createdPost.jobPostDetail.package[2] = obj3;
    // console.log( createdPost)
    // console.log("NoSql done! ", createdPost._id)

    // return createdPost.save();





        //  //newPost.post_id = createdJobPost.job_post_id;
    //   newPost.post_name = postDto.post_name;
    //   newPost.category_detail_name = getNameCategoryDetail.category_detail_name;
    //   //newPost.vote = 0
    //   //newPost.post_detail = new PostDetailDto()
    //   newPost.post_detail = {} as any
    //   newPost.post_detail.profile_user = postDto.post_detail.profile_user
    //   newPost.post_detail.description = postDto.post_detail.description
    //   newPost.post_detail.FAQ =  postDto.post_detail.FAQ
    //   //newPost.post_detail.packages =  
      
    //   const obj1 = {
    //     package_id: postDto.post_detail.packages[0].package_id,
    //     package_name: postDto.post_detail.packages[0].package_name,
    //     package_detail: {
    //       'revision': postDto.post_detail.packages[0].package_detail.revision ,
    //       'unit_price': postDto.post_detail.packages[0].package_detail.unit_price,
    //       'delivery_day': postDto.post_detail.packages[0].package_detail.delivery_day
    //   }};
    //   //newArray.push(obj1);
    //    console.log( obj1)

    //   const obj2 = {
    //     package_id: postDto.post_detail.packages[1].package_id,
    //     package_name: postDto.post_detail.packages[1].package_name,
    //     package_detail: {
    //       'revision': postDto.post_detail.packages[1].package_detail.revision ,
    //       'unit_price': postDto.post_detail.packages[1].package_detail.unit_price,
    //       'delivery_day': postDto.post_detail.packages[1].package_detail.delivery_day
    //   }};
    //   console.log( obj2)
    //    //newArray.push(obj2);

    //   const obj3 = {
    //     package_id: postDto.post_detail.packages[2].package_id,
    //     package_name: postDto.post_detail.packages[2].package_name,
    //     package_detail: {
    //       'revision': postDto.post_detail.packages[2].package_detail.revision ,
    //       'unit_price': postDto.post_detail.packages[2].package_detail.unit_price,
    //       'delivery_day': postDto.post_detail.packages[2].package_detail.delivery_day
    //   }};
    //   console.log(obj3)
    //   // newArray.push(obj3);
      

    //   const newArray : PackageDto[] = [obj1, obj2, obj3]
     
      
    //   console.log(newArray)
    //   // newPost.post_detail.packages[0] = obj1;
    //   // newPost.post_detail.packages[1] = obj2;
    //   // newPost.post_detail.packages[2] = obj3;

    //   newPost.post_detail.packages = newArray;

     

      //console.log("test - savePost: ", savePost)