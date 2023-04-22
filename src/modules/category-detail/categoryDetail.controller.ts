import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
//import { CategoryDetailMiddleware } from 'src/middlewares/CategoryDetail.middleware';
import { TransformPipe } from 'src/common/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/common/pipes/validator.pipe';
import { CategoryDetailDto } from './categoryDetail.dto';
import { CategoryDetailService } from './categoryDetail.service';
import { Request } from 'express';

// working with DTO
@Controller('category-detail') 
export class CategoryDetailController  {
   constructor(private categoryDetailService: CategoryDetailService){}

   @Get('CategoryDetails')
   async getCategoryDetails(): Promise<CategoryDetailDto[]> {
       //console.log(this.CategoryDetailService.getCategories())
       return this.categoryDetailService.getCategories();
   }
   
   @Get('name')
   async getIdByCategoryDetailName(@Param('name') name: string): Promise<number> {
       return this.categoryDetailService.getIdByCategoryDetailName(name);
   }

   @Get(':id')
   async getCategoryDetailById(@Param('id') id: number): Promise<CategoryDetailDto> {
       return this.categoryDetailService.getByCategoryDetailId(id);
   }

   @Post()
   @UsePipes(new ValidatorPipe())
   async createCategoryDetail(@Body() categoryDetail: CategoryDetailDto): Promise<CategoryDetailDto> {
       return this.categoryDetailService.createCategoryDetail(categoryDetail);
   }

   @Put(':id')
   async updateCategoryDetailbyId(@Param('id') id: number, @Body() categoryDetailDto: CategoryDetailDto,): Promise<CategoryDetailDto> {
       return this.categoryDetailService.updateCategoryDetailById(id, categoryDetailDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   async deleteCategoryById(@Param('id') id: number): Promise<void> {
       console.log(this.categoryDetailService.deleteCategoryDetailById(id));
   }

   
}




   
   // @Get()
   // //@NestMiddleware(CategoryDetailMiddleware)
   // getCategoryDetailById(@Req() req: Request){
   //     const categories = this.CategoryDetailService.getCategories();
   //     return { message: 'Success', data: categories};
   // }