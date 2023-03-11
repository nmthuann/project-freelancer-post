import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ICategoryRepository } from 'src/common/interfaces/ICategoryRepository';
import { IRepository } from 'src/common/interfaces/interface.repository';
import { CategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
// export class CategoryService  { //implements ICategoryService
//     constructor(
//         @InjectRepository(CategoryEntity)
//     private categoryRepository: CategoryRepository ) {}

//     async save(CategoryDto: CategoryDto): Promise<CategoryDto>{
//         const saved = await this.categoryRepository.save(CategoryDto);
//         return plainToInstance(CategoryDto, saved);
//     }
    
//     async create(categoryData: CategoryEntity): Promise<CategoryEntity> {
//       return this.categoryRepository.create(categoryData);
//     }
  
//     async update(id: number, categoryData: CategoryEntity): Promise<CategoryEntity> {
//       return this.categoryRepository.update(id, categoryData);
//     }
  
//     async delete(id: number): Promise<void> {
//       return this.categoryRepository.delete(id);
//     }
  
//     async findAll(): Promise<CategoryEntity[]> {
//       return this.categoryRepository.findAll();
//     }
  
//     async findById(id: number): Promise<CategoryEntity> {
//       return this.categoryRepository.findById(id);
//     }
// }

export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  // async getCategories(): Promise<CategoryDto[]> {
  //   const categories = await this.categoryRepository.find();
  //   return categories.map(category => new CategoryDto(category));
  // }

  // async findOne(id: number): Promise<CategoryDto> {
  //   const category = await this.categoryRepository.findOne(id);
  //   if (!category) {
  //     throw new NotFoundException(`Category with id ${id} not found`);
  //   }
  //   return new CategoryDto(category);
  // }

  // async create(CategoryDto: CategoryDto): Promise<CategoryDto> {
  //   const category = new Category();
  //   category.name = CategoryDto.name;
  //   category.description = CategoryDto.description;
  //   const newCategory = await this.categoryRepository.create(category);
  //   return new CategoryDto(newCategory);
  // }

  // async update(id: number, CategoryDto: CategoryDto): Promise<CategoryDto> {
  //   const category = await this.categoryRepository.findOne(id);
  //   if (!category) {
  //     throw new NotFoundException(`Category with id ${id} not found`);
  //   }
  //   category.name = CategoryDto.name;
  //   category.description = CategoryDto.description;
  //   const updatedCategory = await this.categoryRepository.update(category);
  //   return new CategoryDto(updatedCategory);
  // }

  // async delete(id: number): Promise<void> {
  //   const category = await this.categoryRepository.findOne(id);
  //   if (!category) {
  //     throw new NotFoundException(`Category with id ${id} not found`);
  //   }
  //   await this.categoryRepository.delete(category);
  // }
}




// async createCategory(CategoryDto: CategoryDto): Promise<CategoryDto> {
//   const category = new CategoryEntity();
//   category.category_name = CategoryDto.category_name;
//   category.description = CategoryDto.description;
//   const newCategory = await this.categoryRepository.save(category);
//   return newCategory;
//   // return new CategoryDto({
//   //   id: newCategory.category_id,
//   //   name: newCategory.category_name,
//   //   description: newCategory.description,
//   // });
// }

// async getCategoryById(id: number): Promise<CategoryDto | undefined> {
//   const category = await this.categoryRepository.getById(id);
//   if (category) {
//      //const  newCategory = await this.categoryRepository.save(category);
//               return category;
//   //    new CategoryDto({
//   //     id: category.id,
//   //     name: category.name,
//   //     description: category.description,
//   //   });
//   }
//   return undefined;
// }

// //   async updateCategory(id: number, CategoryDto: CategoryDto): Promise<CategoryDto | undefined> {
// //     const category = new CategoryEntity();
// //     category.category_name = CategoryDto.category_name;
// //     category.description = CategoryDto.description;
// //     const updatedCategory = await this.categoryRepository.update(id, CategoryDto);
// //     if (updatedCategory) {
// //         return updatedCategory;
// //     //   return new CategoryDto({
// //     //     id: updatedCategory.id,
// //     //     name: updatedCategory.name,
// //     //     description: updatedCategory.description,
// //     //   });
// //     }
// //     return undefined;
// //   }

// async deleteCategory(id: number): Promise<void> {
//   await this.categoryRepository.delete(id);
// }