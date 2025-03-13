import { JobPostDto } from 'src/modules/job-post/dtos/job-post.dto';

export class JobPostDetailDto {
  job_post_detail_id: number;
  job_post: JobPostDto;
  profile_user: string;
  description: string;
  FAQ: string;

  constructor(
    job_post: JobPostDto,
    profile_user: string,
    description: string,
    FAQ: string,
  ) {
    this.job_post = job_post;
    this.profile_user = profile_user;
    this.description = description;
    this.FAQ = FAQ;
  }
}
