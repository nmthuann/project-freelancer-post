import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PackageDto } from './post-dto/package.dto';
//import { Post } from './interfaces/post.interface';
import { PostDto } from './post-dto/post.dto'
import { Post } from './post.entity';
import { UpdatePostDto } from './post-dto/update-post.dto';
import { IJobPostService } from '../job-post/jobPost.service.interface';
import { ICategoryDetailService } from '../category-detail/categoryDetail.service.interface';
import { IJobPostDetailService } from '../job-post-detail/jobPostDetail.service.interface';
import { CreatePostDetailDto, PostDetailDto } from './post-dto/postDetail.dto';
import { JobPostDto } from '../job-post/job-post-dto/jobPost.dto';
import { JobPostDetailDto } from '../job-post-detail/job-post-detail-dto/jobPostDetail.dto';
import { CategoryDetailDto } from '../category-detail/category-detail-dto/categoryDetail.dto';

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

  async CreatePost(postDto: PostDto): Promise<PostDto | object> {
    // Xử lý ở Phía SQL
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
        postDto.post_detail.profile_user,
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

  async updatePost(name: string, postDto: UpdatePostDto): Promise<UpdatePostDto | any> {
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

    try {
      const check_post = this.postModel.find(
        {post_id: postDto.post_id},
        {profile_user: name});
      if(!check_post){
        throw new Error('id hoặc profile không tồn tại !!')
      }
      else{
        // phía SQL
        // const findJobPost = await this.jobPostService.getOneById(postDto.post_id);
        // console.log("findJobPost", findJobPost)
        
        // const getJobPostDetail = 
        // await this.jobPostDetailService.getJobPostDetail(findJobPost, name);
        // console.log("getJobPostDetail", getJobPostDetail)

        // const updateJobPostDetail = new JobPostDetailDto(
        //   findJobPost,
        //   name,
        //   postDto.description,
        //   postDto.FAQ
        // )
        // console.log("updateJobPostDetail", updateJobPostDetail)

        // // update JobPostDetail
        // await this.jobPostDetailService.updateOneById(
        //   6, // lỗi
        //   updateJobPostDetail
        // )

        // update Package
        const updatePostDocument = await this.postModel.updateOne(
          ((await this.postModel.findOne({ post_id: postDto.post_id }))),
          {packages: postDto.packages}
        );
        console.log(updatePostDocument)
        return await this.postModel.findOne({ post_id: postDto.post_id });
      }
    } catch (error) {
      return {messgae: "update Post failed"}
    }
  }
}



















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