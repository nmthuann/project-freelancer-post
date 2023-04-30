import { IBaseService } from "src/modules/bases/base.interface";
import { JobPostDetailDto } from "./job-post-detail-dto/jobPostDetail.dto";
import { JobPostDto } from "../job-post/job-post-dto/jobPost.dto";

export interface IJobPostDetailService extends IBaseService<JobPostDetailDto>{
    getJobPostDetail(job_post: JobPostDto, profile_name: string): Promise<JobPostDetailDto | object>;
}