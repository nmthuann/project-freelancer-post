import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService  { //implements ICategoryService
    constructor(
        @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity> ) {}

    async save(categoryDto: CategoryDto): Promise<CategoryDto>{
        const saved = await this.categoryRepository.save(categoryDto);
        return plainToInstance(CategoryDto, saved);
    }

    getCategories(){
        
    }
}





    // public async getCategoryByName(name: string): Promise<CategoryEntity> {
    //     throw new Error('Method not implemented.');
    // }

    // public async findAll(): Promise<CategoryEntity[]> {
    //     return await this.categoryRepository.find();
    // }