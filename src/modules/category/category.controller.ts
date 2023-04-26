import { Body, Controller, Delete, Get, Param, Post, Put,
     Req, UsePipes, NestMiddleware, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ValidatorPipe } from 'src/common/pipes/validator.pipe';
import { CategoryDto } from './category-dto/category.dto';
import { CategoryService } from './category.service';
import { ICategoryService } from './category.interface';
import { CreateCategoryDto } from './category-dto/create-category.dto';

// working with DTO
@Controller('category') 
export class CategoryController {
    //private categoryService: ICategoryService;
    constructor(@Inject('ICategoryService')
        private categoryService: ICategoryService
    ) {}

    @Post('create')
    // @UsePipes(new ValidatorPipe())
    async createCategory(@Body() category: CreateCategoryDto): Promise<CreateCategoryDto> {
        return await this.categoryService.create(category);
    }

    @Put('update/:id')
    async updateCategoryById(@Param('id') id: number, @Body() categoryDto: CategoryDto): Promise<CategoryDto> {
        return this.categoryService.updateOneById(id, categoryDto);
    }

    @Delete('delete/:id')
    //@HttpCode(HttpStatus.NO_CONTENT)
    async deleteCategoryById(@Param('id') id: number): Promise<void> {
        console.log(this.categoryService.deleteOneById(id));
    }

    @Get('Categories')
    async getCategories(): Promise<CategoryDto[]> {
        //console.log(this.categoryService.getCategories())
        return await this.categoryService.getAll();
    }
    
    @Get(':id')
    async getCategory(@Param('id') id: number): Promise<CategoryDto> {
        return await this.categoryService.getOneById(id);
    }
}
