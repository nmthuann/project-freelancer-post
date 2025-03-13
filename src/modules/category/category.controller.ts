import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { CategoryDto } from './dtos/category.dto';
import { ICategoryService } from './category.service.interface';
import { AdminRoleGuard } from 'src/guards/admin.role.guard';

// working with DTO
@Controller('category')
export class CategoryController {
  constructor(
    @Inject('ICategoryService')
    private readonly categoryService: ICategoryService,
  ) {}

  @UseGuards(AdminRoleGuard)
  @Post('create')
  async createCategory(@Body() category: CategoryDto): Promise<CategoryDto> {
    return await this.categoryService.createOne(category);
  }

  @UseGuards(AdminRoleGuard)
  @Put('update/:id')
  async updateCategoryById(
    @Param('id') id: number,
    @Body() categoryDto: CategoryDto,
  ): Promise<CategoryDto> {
    return this.categoryService.updateOneById(id, categoryDto);
  }

  @UseGuards(AdminRoleGuard)
  @Delete('delete/:id')
  async deleteCategoryById(@Param('id') id: number): Promise<void> {
    console.log(await this.categoryService.deleteOneById(id));
  }

  @Get('get-categories')
  async getCategories(): Promise<CategoryDto[]> {
    return await this.categoryService.getAll();
  }

  @Get('get-categories-name')
  async getCategoryNameList() {
    return await this.categoryService.getCategoryNameList();
  }

  // @UseGuards(AdminRoleGuard)
  @Get(':id')
  async getCategory(@Param('id') id: number): Promise<CategoryDto> {
    return await this.categoryService.getOneById(id);
  }

  @Get('category-detail-list/:id')
  async getCategoryDetailsByCategoryId(@Param('id') id: number) {
    return await this.categoryService.getCategoryDetailByCategoryId(id);
  }
}
