import { IBaseService } from "src/modules/bases/base.interface";
import { CategoryDetailDto } from "./category-detail-dto/categoryDetail.dto";

export interface ICategoryDetailService extends IBaseService<CategoryDetailDto> {
    getIdByCategoryDetailName(name: string): any;
}