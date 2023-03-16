import { Expose } from "class-transformer"
import { IsString, IsInt } from 'class-validator';
import { CategoryEntity } from "../category/category.entity";

export class CategoryDetailDto {
    // @Expose()
    // @IsInt()
    //category_id: number

    @Expose()
    @IsString()
    category_detail_name: string

    category: CategoryEntity


    //@Expose()
    //timestamp: Date
}