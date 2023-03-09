import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
//import { ICategoryService } from './interfaces/category.interface.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}
    @Get(':categoryId')
    async getCategoryById(@Param('categoryId') categoryId) {
        console.log("test")
        const list = this.categoryService.getCategoryById(categoryId)
        console.log(list) ;
        return list;
    }
}
