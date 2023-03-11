import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
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

    @Get()
    async getCategory(): Promise<CategoryDto> {
        return this.categoryService.findOne(1);
    }

    @Get('categories')
    async getCategories(): Promise<CategoryDto[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CategoryDto> {
        return this.categoryService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidatorPipe())
    async create(@Body() category: CategoryDto): Promise<CategoryDto> {
        return this.categoryService.save(category);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() categoryDto: CategoryDto,): Promise<CategoryDto> {
        return this.categoryService.update(id, categoryDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number): Promise<void> {
        return this.categoryService.delete(id);
    }
}




    
    // @Get()
    // //@NestMiddleware(CategoryMiddleware)
    // getCategoryById(@Req() req: Request){
    //     const categories = this.categoryService.getCategories();
    //     return { message: 'Success', data: categories};
    // }