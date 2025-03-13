import { JobPostDto } from 'src/modules/job-post/dtos/job-post.dto';

export class CreateJobPostDetailDto {
  job_post: JobPostDto;
  profile_user: string;
  description: string;
  FAQ: string;
}
