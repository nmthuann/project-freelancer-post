import { Body, Controller, Delete,
    Get, Param, Post, Put, Inject } from '@nestjs/common';
import { CategoryDetailDto } from './category-detail-dto/categoryDetail.dto';
import { ICategoryDetailService } from './categoryDetail.service.interface';
import { CreateCategoryDetailDto } from './category-detail-dto/create-categoryDetail.dto';

// working with DTO
@Controller('category-detail') 
export class CategoryDetailController  {
   constructor(
    @Inject('ICategoryDetailService') 
    private categoryDetailService: ICategoryDetailService){}

    
    @Get('CategoryDetails')
    async getCategoryDetails(): Promise<CategoryDetailDto[]> {
        return await this.categoryDetailService.getAll();
    }
   
    @Post('create')
    async createCategoryDetail(
    @Body() categoryDetail: CategoryDetailDto
    ) {
        // const adapter = new CategoryDetailDto();
        // adapter.category.category_id = categoryDetail.category_id;
        // adapter.category_detail_name = categoryDetail.category_detail_name;
        return await this.categoryDetailService.createOne(categoryDetail);
    }

    @Put('update/:id')
    async updateCategoryDetailbyId(
    @Param('id') id: number, 
    @Body() categoryDetailDto: CategoryDetailDto
    ): Promise<CategoryDetailDto> {
       return await this.categoryDetailService.updateOneById(id, categoryDetailDto);
    }

    @Delete('delete/:id')
    async deleteCategoryById(@Param('id') id: number): Promise<void> {
        console.log(this.categoryDetailService.deleteOneById(id));
    }


    @Get('category-detail-list/:id')
    async getCategoryDetailsByCategoryId(@Param('id') category_id: number){
       return await this.categoryDetailService.getCategoryDetailsByCategoryId(category_id);
    }

    @Get('name')
    async getIdByCategoryDetailName(@Param('name') name: string): Promise<number> {
       return this.categoryDetailService.getIdByCategoryDetailName(name);
    }

    @Get(':id')
    async getCategoryDetailById(@Param('id') id: number): Promise<CategoryDetailDto> {
       return this.categoryDetailService.getOneById(id);
    } 
}