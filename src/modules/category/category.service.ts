import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dtos/category.dto';
import { ICategoryService } from './category.service.interface';
import { BaseService } from '../../common/bases/base.abstract';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService
  extends BaseService<CategoryDto>
  implements ICategoryService
{
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryDto>,
  ) {
    super(categoryRepository);
  }

  async getCategoryDetailByCategoryId(category_id: number) {
    const category = await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.category_detail', 'category_detail')
      .where('category.category_id = :id', { id: category_id })
      .getMany();
    return category;
  }

  async getCategoryNameList(): Promise<string[]> {
    const categories = await this.getAll();
    const categoryNames = categories.map((category) => category.category_name);
    return categoryNames;
  }
}
