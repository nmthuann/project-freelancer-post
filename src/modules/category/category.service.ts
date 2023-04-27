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
    @InjectRepository(CategoryEntity)
    categoryRepository: Repository<CategoryDto>,
    ) {
        super(categoryRepository);
    }

    updateCategory(categoryDto: CategoryDto) {
        return `${categoryDto} test updateCategory`;
    }  
}

