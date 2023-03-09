import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './repositories/category.repository';
//import { ICategoryRepository } from './repositories/interfaces/category.interface';
//import { ICategoryService } from './interfaces/category.interface.service';

@Injectable()
export class CategoryService  { //implements ICategoryService
    constructor(@InjectRepository(CategoryEntity) 
    private readonly categoryRepository: CategoryRepository ) {}


    public async getCategoryByName(name: string): Promise<CategoryEntity> {
        throw new Error('Method not implemented.');
    }

    public async getCategoryById(id: number): Promise<CategoryEntity> {
        return await this.categoryRepository.findOneById(id);
    } 
}
