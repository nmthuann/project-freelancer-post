import { CategoryDetailDto } from 'src/modules/category-detail/dtos/category-detail.dto';

export class JobPostDto {
  job_post_id: number;
  category_detail: CategoryDetailDto;
  job_post_name: string;
  vote: number;

  constructor(category_detail: CategoryDetailDto, job_post_name: string) {
    this.job_post_name = job_post_name;
    this.category_detail = category_detail;
  }
}
