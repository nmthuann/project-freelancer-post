import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDetailEntity } from './category-detail.entity';
import { CategoryDetailDto } from './dtos/category-detail.dto';
import { BaseService } from '../../common/bases/base.abstract';
import { ICategoryDetailService } from './category-detail.service.interface';
import { ICategoryService } from '../category/category.service.interface';

@Injectable()
export class CategoryDetailService
  extends BaseService<CategoryDetailDto>
  implements ICategoryDetailService
{
  constructor(
    @InjectRepository(CategoryDetailEntity)
    private readonly categoryDetailRepository: Repository<CategoryDetailDto>,
    @Inject('ICategoryService')
    private readonly categoryService: ICategoryService,
  ) {
    super(categoryDetailRepository);
  }

  // async getCategoryDetailsByCategoryId(category_id: number) {
  // //  const category = await this.categoryRepository.findOne(categoryId, { relations: ["category_detail"] });

  // // if (!category) {
  // //   throw new Error("Category not found");
  // // }
  // // return category.category_detail;
  // throw
  // }

  async createOne(data: CategoryDetailDto): Promise<CategoryDetailDto> {
    const findCategory = await this.categoryService.getOneById(
      data.category.category_id,
    );
    return await this.categoryDetailRepository.save({
      ...findCategory,
      ...data,
    });
  }

  async getIdByCategoryDetailName(name: string): Promise<CategoryDetailDto> {
    try {
      const categoryDetail = await this.categoryDetailRepository.findOneBy({
        category_detail_name: name,
      });
      return categoryDetail;
    } catch (error) {
      throw new NotFoundException(
        `Category detail with name ${name} not found`,
      );
    }
  }
}
