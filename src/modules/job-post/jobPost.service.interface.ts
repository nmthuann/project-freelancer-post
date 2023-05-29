import { IBaseService } from "src/modules/bases/base.interface";
import { JobPostDto } from "./job-post-dto/jobPost.dto";

export interface IJobPostService extends IBaseService<JobPostDto>{
    getPostsByCategoryDetailId(id: number): Promise<JobPostDto []>;
}