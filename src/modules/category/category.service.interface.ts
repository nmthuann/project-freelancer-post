import { IBaseService } from "../bases/base.interface";
import { CategoryDto } from "./category-dto/category.dto";

export interface ICategoryService extends IBaseService<CategoryDto>{
    updateCategory(categoryDto: CategoryDto): any;
    getCategoryNameList(): any;
    getCategoryDetailByCategoryId(category_id: number);
}