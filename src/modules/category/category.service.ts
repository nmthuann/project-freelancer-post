import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './category.dto';
//import { CategoryRepository } from 'src/common/interfaces/ICategoryRepository'
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    // private readonly categoryRepo: ICategoryRepository,
  ) {}

    getCategories(): Promise<CategoryEntity[]> {
        return this.categoryRepository.find();
    }

    getByCategoryId(id: number) {
        return this.categoryRepository.findOneById(id);
    }
      
    async create(categoryDto: CategoryDto): Promise<CategoryDto> {
        return this.categoryRepository.save(categoryDto);
    }

    async updateCategory(id: number, categoryDto: CategoryDto): Promise<CategoryDto>{
        return this.categoryRepository.preload(categoryDto);
    }

    async updateCategoryById(id: number, categoryDto: CategoryDto){
        const cateUpdate = await this.categoryRepository.findOneById(id);
        return this.categoryRepository.save({...cateUpdate, ...categoryDto});
    }

    async deleteCategoryById(id: number): Promise<DeleteResult> {
        // const deleted = 
        // console.log(deleted)
        return this.categoryRepository.softDelete(id);

    //     const category = await this.categoryRepository.findOne(id);
    //     if (!category) {
    //       throw new NotFoundException(`Category with id ${id} not found`);
    //     }
    //     await this.categoryRepository.delete(category);
    //   }

    }
}