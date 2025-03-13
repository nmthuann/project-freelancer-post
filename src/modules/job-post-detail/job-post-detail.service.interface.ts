import { IBaseService } from 'src/common/bases/base.interface';
import { JobPostDetailDto } from './dtos/job-post-detail.dto';
import { JobPostDto } from '../job-post/dtos/job-post.dto';

export interface IJobPostDetailService extends IBaseService<JobPostDetailDto> {
  getJobPostDetail(
    job_post: JobPostDto,
    profile_name: string,
  ): Promise<JobPostDetailDto | object>;

  getJobPostDetailList();
}
