import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes, NestMiddleware } from '@nestjs/common';
import { CategoryMiddleware } from 'src/middlewares/category.middleware';
import { TransformPipe } from 'src/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/pipes/validator.pipe';
import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';
import { Request } from 'express';

// working with DTO
@Controller('category') 
export class CategoryController  {
    constructor(private categoryService: CategoryService){}
    
    // @Get()
    // @NestMiddleware(CategoryMiddleware)
    // getCategoryById(@Req() req: Request){
    //     const categories = this.categoryService.getCategories();;
    //     return { message: 'Success', data: categories};
    // }

    @Post()
    @UsePipes(new ValidatorPipe())
    createCategory(@Body() category: CategoryDto): Promise<CategoryDto>{
        return this.categoryService.save(category);
    }
}



