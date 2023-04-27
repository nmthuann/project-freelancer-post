import { IBaseService } from "src/modules/bases/base.interface";
import { JobPostDto } from "./job-post/jobPost.dto";

export interface IJobPostService extends IBaseService<JobPostDto>{}