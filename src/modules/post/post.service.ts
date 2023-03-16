import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CategoryDetailEntity } from '../category-detail/categoryDetail.entity';
import { JobPostDetailEntity } from '../job-post-detail/jobPostDetail.entity';
import { JobPostDto } from '../job-post/jobPost.dto';
import { JobPostEntity } from '../job-post/jobPost.entity';
import { JobPostService } from '../job-post/jobPost.service';
import { PackageEntity } from '../package/package.entity';
import { ProfileEntity } from '../profile/profile.entity';
import { PackageDto } from './package.dto';
//import { Post } from './interfaces/post.interface';
import {PostDto} from './post.dto'
import { JobPostDetail, Package, Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) 
  private readonly postModel: Model<Post>,
    @InjectModel(ProfileEntity.name) 
  private readonly profileModel: Model<ProfileEntity>,
    @InjectRepository( JobPostEntity )
  private readonly jobPostRepository: Repository<JobPostEntity>,
    @InjectRepository( CategoryDetailEntity )
  private readonly categoryDetailRepository: Repository<CategoryDetailEntity>,
    @InjectRepository(JobPostDetailEntity)
  private readonly jobPostDetailRepository: Repository<JobPostDetailEntity>,
    @InjectRepository(PackageEntity)
  private readonly PackageRepository: Repository<JobPostDetailEntity>,
  
  private jobPostService: JobPostService
  ) {} //private readonly jobpostdetailModel: Model<JobPostDetail>



  async CreatePost(postDto: PostDto) {
    const createdPost = new this.postModel();

    //Xử lý ở phía NoSQL dưới dạng Document
    
    createdPost.jobPostId = (await this.jobPostService.getJobPosts()).length + 1;
    createdPost.jobName = postDto.job_name;
    createdPost.categoryDetailName = postDto.categoryDetail;
    createdPost.vote = postDto.vote;
    createdPost.jobPostDetail = {} as any
    createdPost.jobPostDetail.profileName = postDto.job_post_detail.profile_name
    //createdPost.jobPostDetail.orderExtra = {} as any
    createdPost.jobPostDetail.package =  new Array(3);
    const obj1 = {
      package_id: postDto.job_post_detail.packages[0].package_id,
      package_name: postDto.job_post_detail.packages[0].package_name,
      packageDetail: {
        'revision': postDto.job_post_detail.packages[0].packageDetail.revision ,
        'unitPrice': postDto.job_post_detail.packages[0].packageDetail.unit_price,
        'deliveryDay': postDto.job_post_detail.packages[0].packageDetail.deliveryDay
    }};

    const obj2 = {
      package_id: postDto.job_post_detail.packages[1].package_id,
      package_name: postDto.job_post_detail.packages[1].package_name,
      packageDetail: {
        'revision': postDto.job_post_detail.packages[1].packageDetail.revision ,
        'unitPrice': postDto.job_post_detail.packages[1].packageDetail.unit_price,
        'deliveryDay': postDto.job_post_detail.packages[1].packageDetail.deliveryDay
    }};

    const obj3 = {
      package_id: postDto.job_post_detail.packages[2].package_id,
      package_name: postDto.job_post_detail.packages[2].package_name,
      packageDetail: {
        'revision': postDto.job_post_detail.packages[2].packageDetail.revision ,
        'unitPrice': postDto.job_post_detail.packages[2].packageDetail.unit_price,
        'deliveryDay': postDto.job_post_detail.packages[2].packageDetail.deliveryDay
    }};
      
      
    createdPost.jobPostDetail.package[0] = obj1;
    createdPost.jobPostDetail.package[1] = obj2;
    createdPost.jobPostDetail.package[2] = obj3;
    console.log(createdPost)
    
    // Xử lý ở Phía SQL
    const jobPost = new JobPostDto();
    jobPost.category_detail.category_detail_id = 1
    this.jobPostRepository.save(jobPost);

    return createdPost.save();
  }

  // async findAll(): Promise<PostDto[]> {
  //   return this.postModel.find().exec();
  // }

  // async findById(jobpost_id: number): Promise<PostDto> {
  //   return this.postModel.findById(jobpost_id).exec();
  // }

  // async update(id: number, postDto: PostDto): Promise<PostDto> {
  //   return this.postModel.findByIdAndUpdate(id, postDto, { new: true }).exec();
  // }

  // async delete(id: number): Promise<PostDto> {
  //   return this.postModel.findByIdAndRemove(id).exec();
  // }
}



    