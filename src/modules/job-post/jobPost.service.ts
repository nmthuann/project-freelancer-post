import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { JobPostEntity } from './jobPost.entity';
import { BaseService } from '../bases/base.abstract';
import { JobPostDto } from './job-post-dto/jobPost.dto';
import { IJobPostService } from './jobPost.service.interface';
import { ICategoryDetailService } from '../category-detail/categoryDetail.service.interface';


@Injectable()
export class JobPostService extends BaseService<JobPostDto> implements IJobPostService {
    constructor(
        @InjectRepository(JobPostEntity)
        private readonly jobPostRepository: Repository<JobPostDto>,
        @Inject('ICategoryDetailService')
        private readonly categoryDetailService: ICategoryDetailService,
    ) {
        super(jobPostRepository);
    }
    
    async createOne(data: JobPostDto): Promise<JobPostDto> {
        const findCategoryDetail = 
        await this.categoryDetailService.getOneById(data.category_detail.category_detail_id);
        return await this.jobPostRepository.save({...findCategoryDetail, ...data});
    }
}







    //     async getLastJobPost(): Promise<JobPostEntity | undefined> {
    //         const allJobPosts = await this.jobPostRepository.find();
    //         const lastJobPost = allJobPosts[allJobPosts.length - 1];
    //         if (!lastJobPost) {
    //           throw new NotFoundException(`No JobPostEntity found`);
    //         }
    //         return lastJobPost;
    //       }