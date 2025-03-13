import { IBaseService } from 'src/common/bases/base.interface';
import { JobPostDto } from './dtos/job-post.dto';

export interface IJobPostService extends IBaseService<JobPostDto> {
  getPostsByCategoryDetailId(id: number): Promise<JobPostDto[]>;
}
