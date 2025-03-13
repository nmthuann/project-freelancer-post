import { IBaseService } from 'src/common/bases/base.interface';
import { CategoryDetailDto } from './dtos/category-detail.dto';

export interface ICategoryDetailService
  extends IBaseService<CategoryDetailDto> {
  getIdByCategoryDetailName(name: string): any;
}
