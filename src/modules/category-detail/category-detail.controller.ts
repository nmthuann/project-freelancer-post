import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
} from '@nestjs/common';
import { CategoryDetailDto } from './dtos/category-detail.dto';
import { ICategoryDetailService } from './category-detail.service.interface';

// working with DTO
@Controller('category-detail')
export class CategoryDetailController {
  constructor(
    @Inject('ICategoryDetailService')
    private readonly categoryDetailService: ICategoryDetailService,
  ) {}

  @Get('CategoryDetails')
  async getCategoryDetails(): Promise<CategoryDetailDto[]> {
    return await this.categoryDetailService.getAll();
  }

  @Post('create')
  async createCategoryDetail(@Body() categoryDetail: CategoryDetailDto) {
    return await this.categoryDetailService.createOne(categoryDetail);
  }

  @Put('update/:id')
  async updateCategoryDetailbyId(
    @Param('id') id: number,
    @Body() categoryDetailDto: CategoryDetailDto,
  ): Promise<CategoryDetailDto> {
    return await this.categoryDetailService.updateOneById(
      id,
      categoryDetailDto,
    );
  }

  @Delete('delete/:id')
  async deleteCategoryById(@Param('id') id: number): Promise<void> {
    console.log(this.categoryDetailService.deleteOneById(id));
  }

  @Get('name')
  async getIdByCategoryDetailName(
    @Param('name') name: string,
  ): Promise<number> {
    return this.categoryDetailService.getIdByCategoryDetailName(name);
  }

  @Get(':id')
  async getCategoryDetailById(
    @Param('id') id: number,
  ): Promise<CategoryDetailDto> {
    return this.categoryDetailService.getOneById(id);
  }
}
