import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPostDetailEntity } from './job-post-detail.entity';
import { JobPostDetailDto } from './dtos/job-post-detail.dto';
import { BaseService } from '../../common/bases/base.abstract';
import { IJobPostDetailService } from './job-post-detail.service.interface';
import { IJobPostService } from '../job-post/job-post.service.interface';
import { CreateJobPostDetailDto } from './dtos/create-job-post-detail.dto';
import { JobPostDto } from '../job-post/dtos/job-post.dto';

@Injectable()
export class JobPostDetailService
  extends BaseService<JobPostDetailDto>
  implements IJobPostDetailService
{
  constructor(
    @InjectRepository(JobPostDetailEntity)
    private readonly jobPostDetailRepository: Repository<JobPostDetailEntity>,
    @Inject('IJobPostService')
    private readonly jobPostService: IJobPostService,
  ) {
    super(jobPostDetailRepository);
  }
  getJobPostDetailList() {
    throw new Error('Method not implemented.');
  }

  // overriding
  async createOne(data: CreateJobPostDetailDto): Promise<JobPostDetailDto> {
    const findJobPost = await this.jobPostService.getOneById(
      data.job_post.job_post_id,
    );
    return await this.jobPostDetailRepository.save({ ...findJobPost, ...data });
  }

  // async updateOneById(id: number, data: JobPostDetailDto): Promise<JobPostDetailDto> {
  //     return
  // }

  async getJobPostDetail(
    job_post: JobPostDto,
    profile_name: string,
  ): Promise<JobPostDetailDto | object> {
    try {
      const findJobPostDetail = await this.jobPostDetailRepository.findOneBy({
        job_post: job_post,
        profile_user: profile_name,
      });
      return findJobPostDetail;
    } catch (error) {
      return { message: `${error}` };
    }
  }
}
