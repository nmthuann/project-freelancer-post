import { CategoryDetailEntity } from "../category-detail/categoryDetail.entity";
import { JobPostEntity } from "../job-post/jobPost.entity";

export class JobPostDetailDto {

   // job_post_id: number;
    job_post: JobPostEntity
    profile_id: number;
    description: string;
    FAQ: string;
    
    // toString(){
    //     return JSON.stringify({
    //        //job_post_id: this.job_post_id,
    //         category_detail: this.category_detail,
    //         job_post_name: this.job_post_name,
    //         vote: this.vote
    //     })
    // }
}