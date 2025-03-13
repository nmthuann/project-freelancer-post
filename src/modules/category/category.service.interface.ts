import { IBaseService } from '../../common/bases/base.interface';
import { CategoryDto } from './dtos/category.dto';

export interface ICategoryService extends IBaseService<CategoryDto> {
  getCategoryNameList(): any;
  getCategoryDetailByCategoryId(category_id: number);
}
