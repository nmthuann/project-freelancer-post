import { CategoryDetailDto } from "src/modules/category-detail/category-detail-dto/categoryDetail.dto";
import { JobPostDto } from "src/modules/job-post/job-post/jobPost.dto";

export class CreateJobPostDetailDto {
    job_post: JobPostDto
    profile_user: string;
    description: string;
    FAQ: string;
}