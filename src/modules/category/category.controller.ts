import { Body, Controller, Delete, Get, Param, Post, Put,
     Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
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

    @Get('Categories')
    async getCategories(): Promise<CategoryDto[]> {
        //console.log(this.categoryService.getCategories())
        return this.categoryService.getCategories();
    }
    
    @Get(':id')
    async getCategory(@Param('id') id: number): Promise<CategoryDto> {
        return this.categoryService.getByCategoryId(id);
    }

    @Post()
    @UsePipes(new ValidatorPipe())
    async create(@Body() category: CategoryDto) {
        return this.categoryService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() categoryDto: CategoryDto,): Promise<CategoryDto> {
        return this.categoryService.updateCategoryById(id, categoryDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number): Promise<void> {
        console.log(this.categoryService.deleteCategoryById(id));
    }
}




    
    // @Get()
    // //@NestMiddleware(CategoryMiddleware)
    // getCategoryById(@Req() req: Request){
    //     const categories = this.categoryService.getCategories();
    //     return { message: 'Success', data: categories};
    // }