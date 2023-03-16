import { CategoryDetailEntity } from "../category-detail/categoryDetail.entity";

export class JobPostDto {

    //public readonly  job_post_id: number;
    category_detail: CategoryDetailEntity;
    job_post_name: string;
    vote: number;
    
    toString(){
        return JSON.stringify({
           //job_post_id: this.job_post_id,
            category_detail: this.category_detail,
            job_post_name: this.job_post_name,
            vote: this.vote
        })
    }
}