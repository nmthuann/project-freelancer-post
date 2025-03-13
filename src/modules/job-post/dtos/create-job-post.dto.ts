import { CategoryDetailDto } from 'src/modules/category-detail/dtos/category-detail.dto';

export class CreateJobPostDto {
  category_detail: CategoryDetailDto;
  job_post_name: string;
}
