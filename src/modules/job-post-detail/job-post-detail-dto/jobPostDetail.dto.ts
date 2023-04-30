import { JobPostDto } from "src/modules/job-post/job-post-dto/jobPost.dto";
import { CategoryDetailEntity } from "../../category-detail/categoryDetail.entity";
import { JobPostEntity } from "../../job-post/jobPost.entity";

export class JobPostDetailDto {

    job_post_detail_id: number;
    job_post: JobPostDto;
    profile_user: string;
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

    constructor(
        job_post: JobPostDto,
        profile_user: string,
        description: string,
        FAQ: string
    ){
        this.job_post = job_post;
        this.profile_user = profile_user;
        this.description = description;
        this.FAQ = FAQ;
    }
}