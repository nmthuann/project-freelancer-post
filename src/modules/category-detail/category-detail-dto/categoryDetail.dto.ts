import { Expose } from "class-transformer"
import { IsString, IsInt } from 'class-validator';
import { CategoryEntity } from "../../category/category.entity";
import { CategoryDto } from "src/modules/category/category-dto/category.dto";

export class CategoryDetailDto {
    category_detail_id: number
    category_detail_name: string
    category: CategoryDto

    // constructor(){

    // }
}