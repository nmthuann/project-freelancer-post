import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
//import { CategoryDetailMiddleware } from 'src/middlewares/CategoryDetail.middleware';
import { TransformPipe } from 'src/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/pipes/validator.pipe';
import { CategoryDetailDto } from './categoryDetail.dto';
import { CategoryDetailService } from './categoryDetail.service';
import { Request } from 'express';

// working with DTO
@Controller('category-detail') 
export class CategoryDetailController  {
   constructor(private CategoryDetailService: CategoryDetailService){}

   @Get('CategoryDetails')
   async getCategoryDetails(): Promise<CategoryDetailDto[]> {
       //console.log(this.CategoryDetailService.getCategories())
       return this.CategoryDetailService.getCategories();
   }
   
   @Get(':id')
   async getCategoryDetailById(@Param('id') id: number): Promise<CategoryDetailDto> {
       return this.CategoryDetailService.getByCategoryDetailId(id);
   }

   @Post()
   @UsePipes(new ValidatorPipe())
   async createCategoryDetail(@Body() CategoryDetail: CategoryDetailDto): Promise<CategoryDetailDto> {
       return this.CategoryDetailService.createCategoryDetail(CategoryDetail);
   }

   @Put(':id')
   async updateCategoryDetailbyId(@Param('id') id: number, @Body() CategoryDetailDto: CategoryDetailDto,): Promise<CategoryDetailDto> {
       return this.CategoryDetailService.updateCategoryDetailById(id, CategoryDetailDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   async deleteCategoryById(@Param('id') id: number): Promise<void> {
       console.log(this.CategoryDetailService.deleteCategoryDetailById(id));
   }
}




   
   // @Get()
   // //@NestMiddleware(CategoryDetailMiddleware)
   // getCategoryDetailById(@Req() req: Request){
   //     const categories = this.CategoryDetailService.getCategories();
   //     return { message: 'Success', data: categories};
   // }