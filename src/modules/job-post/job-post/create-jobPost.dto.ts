import { CategoryDetailDto } from "src/modules/category-detail/category-detail-dto/categoryDetail.dto";

export class CreateJobPostDto {

    //readonly job_post_id: number;
    category_detail: CategoryDetailDto;
    job_post_name: string;
    //vote: number;
    
    // constructor(
    //     category_detail: CategoryDetailDto,
    //     job_post_name: string,
    // ){
    //     //this.job_post_id = job_post_id;
    //     this.job_post_name = job_post_name;
    //     this.category_detail = category_detail;
    // }

    // toString(){
    //     return JSON.stringify({
    //        //job_post_id: this.job_post_id,
    //         category_detail: this.category_detail,
    //         job_post_name: this.job_post_name,
    //         vote: this.vote
    //     })
    // }
}