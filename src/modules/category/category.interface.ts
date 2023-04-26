import { DeleteResult } from "typeorm";
import { CategoryDto } from "./category-dto/category.dto";
import { CreateCategoryDto } from "./category-dto/create-category.dto";
import { IBaseService } from "src/modules/bases/base.interface";
import { BaseService } from "../bases/base.abstract";

export interface ICategoryService extends BaseService<CategoryDto> {
    updateCategory(id: number, categoryDto: CategoryDto): Promise<CategoryDto>;
}