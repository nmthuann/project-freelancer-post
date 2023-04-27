import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { JobPostDetailEntity } from './jobPostDetail.entity';
import { JobPostDetailDto } from './job-post-detail-dto/jobPostDetail.dto';
import { BaseService } from '../bases/base.abstract';
import { IJobPostDetailService } from './jobPostDetail.service.interface';
import { IJobPostService } from '../job-post/jobPost.service.interface';
import { CreateJobPostDetailDto } from './job-post-detail-dto/create-jobPostDetail.dto';

@Injectable()
export class JobPostDetailService 
    extends BaseService<JobPostDetailDto> 
        implements IJobPostDetailService 
{
    constructor(
        @InjectRepository(JobPostDetailEntity)
        private readonly jobPostDetailRepository: Repository<JobPostDetailEntity>,
        @Inject('IJobPostService')
        private readonly jobPostService: IJobPostService
    ) {
        super(jobPostDetailRepository);
    }

    // overriding
    async createOne(data: CreateJobPostDetailDto): Promise<JobPostDetailDto> {
        const findJobPost = 
        await this.jobPostService.getOneById(data.job_post.job_post_id);
        return await this.jobPostDetailRepository.save({...findJobPost, ...data});
    }
}
