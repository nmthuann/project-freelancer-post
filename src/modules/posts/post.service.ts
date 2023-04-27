import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { count } from 'console';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CategoryDetailEntity } from '../category-detail/categoryDetail.entity';
import { CategoryDetailService } from '../category-detail/categoryDetail.service';
import { JobPostDetailDto } from '../job-post-detail/job-post-detail-dto/jobPostDetail.dto';
import { JobPostDetailEntity } from '../job-post-detail/jobPostDetail.entity';
import { JobPostDetailService } from '../job-post-detail/jobPostDetail.service';
import { JobPostDto } from '../job-post/job-post/jobPost.dto';
import { JobPostEntity } from '../job-post/jobPost.entity';
import { JobPostService } from '../job-post/jobPost.service';
import { PackageEntity } from './package/package.entity';
import { PackageDto } from './post-dto/package.dto';
//import { Post } from './interfaces/post.interface';
import {PostDto} from './post-dto/post.dto'
import { JobPostDetail, Package, Post } from './post.entity';
import { Update_PostDto } from './post-dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) 
  private readonly postModel: Model<Post>,
  private jobPostService: JobPostService,
  private categoryDetailService: CategoryDetailService,
  private jobPostDetailService: JobPostDetailService,
  ) {}
  
  async getPost(): Promise<Post[]>{
    try {
      const posts = await this.postModel.find();
      return posts;
    } catch (err) {
      throw new Error(`Failed to get posts: ${err}`);
    }
  }

  async CreatePost(postDto: PostDto) {

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
  }

  async UpdatePost(postDto: Update_PostDto): Promise<Update_PostDto | any>{
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
   
    // const check_post = this.postModel.find({jobPostId: postDto.job_post_id},
    //    {profileName: postDto.job_post_detail.profile_name});
    // if(!check_post){
    //   throw new Error('id hoặc profile không tồn tại !!')
    // }
    // else{
      
    //   // const check_owner = this.postModel.find({jobPostId: postDto.job_post_id},
    //   //   {profileName: postDto.job_post_detail.profile_name})
    //   // if (!check_owner){
    //   //   throw new Error('You arent Owner!!!')
    //   // }
    //   // else{
    //     // phía SQL
    //     const update_JP = new JobPostDto();
    //     update_JP.job_post_name = postDto.job_name;
    //     this.jobPostService.updateJobPost(update_JP);

    //     const update_JPDetail = new JobPostDetailDto();
    //     update_JPDetail.FAQ = postDto.job_post_detail.FAQ;
    //     update_JPDetail.description = postDto.job_post_detail.description;
    //     this.jobPostDetailService.updateJobPostDetail(update_JPDetail);

    //     return await this.postModel.findOneAndUpdate(postDto);
    //   }
    //}
  }
}