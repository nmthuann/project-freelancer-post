import { Expose } from "class-transformer"
import { IsString, IsInt } from 'class-validator';

export class CategoryDto {
    // @Expose()
    // @IsInt()
    category_id: number

    @Expose()
    @IsString()
    category_name: string

    @Expose()
    @IsString()
    description: string

    @Expose()
    timestamp: Date
}