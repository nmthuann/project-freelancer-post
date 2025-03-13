import { CategoryDto } from 'src/modules/category/dtos/category.dto';

export class CategoryDetailDto {
  category_detail_id: number;
  category_detail_name: string;
  category: CategoryDto;
}
