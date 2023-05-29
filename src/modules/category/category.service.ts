import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
//import { CategoryEntity } from './category.entity';
import { CategoryDto } from './category-dto/category.dto';
import {ICategoryService } from './category.service.interface';
import { BaseService } from '../bases/base.abstract';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService extends BaseService<CategoryDto> implements ICategoryService{
  constructor(
    @InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryDto>,
    ) {
        super(categoryRepository);
    }

    async getCategoryDetailByCategoryId(category_id: number) {
        const category = await this.categoryRepository
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.category_detail", "category_detail")
        .where("category.category_id = :id", { id: category_id })
        .getMany();
        return category;
    }
    
    async getCategoryNameList(): Promise<string[]> {
        const categories = await this.getAll();
        const categoryNames = categories.map(category => category.category_name);
        return categoryNames;
    }

    updateCategory(categoryDto: CategoryDto) {
        return `${categoryDto} test updateCategory`;
    }  
    
}

