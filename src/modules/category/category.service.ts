import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './category-dto/category.dto';
import { CreateCategoryDto } from './category-dto/create-category.dto';
import {ICategoryService } from './category.interface';
import { BaseService } from '../bases/base.abstract';

@Injectable()
export class CategoryService extends BaseService<CategoryDto> implements ICategoryService{
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    ) {
        super(categoryRepository);
    }

    updateCategory(id: number, categoryDto: CategoryDto): Promise<CategoryDto> {
        return this.categoryRepository.preload(categoryDto);
    }  
}

