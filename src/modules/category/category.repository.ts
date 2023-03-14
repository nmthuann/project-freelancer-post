// import { Injectable, NotFoundException } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { IRepository } from "src/common/interfaces/interface.repository";
// import { ICategoryRepository } from "src/common/interfaces/ICategoryRepository";
// import { CategoryEntity } from "src/modules/category/category.entity";
// //import { BaseRepository } from "src/common/base/base.repository";
// import { SaveOptions, DeepPartial, Repository } from "typeorm";

// @Injectable()
// export class CategoryRepository  { //extends BaseRepository<CategoryEntity>
  
//   constructor(@InjectRepository(CategoryEntity) 
//     private readonly categoryRepository: Repository<CategoryEntity>) {}

//     async findById(id: number): Promise<CategoryEntity> {
//       const cate = new CategoryEntity();
//       cate.category_id = id;

//       if (!this.categoryRepository.hasId(cate)){
//         throw new NotFoundException(`Category with id ${id} not found`);
//       }
//       return this.categoryRepository.findOne(cate);
//     }

//     async getCategories(): Promise<CategoryEntity[]>{
//       return this.categoryRepository.find();
//     }


//     async create(categoryData: CategoryEntity): Promise<CategoryEntity> {
//       return this.categoryRepository.create(categoryData);
//       //   return await this.categoryRepository.save(category);
//     }
  
//     async update(categoryData: CategoryEntity): Promise<CategoryEntity> {
//       return this.categoryRepository.preload(categoryData);
//     }
  
//     async deleteCate(id: number): Promise<CategoryEntity> {
//       return this.categoryRepository.delete(id);
//     }

//     async save(CategoryDto: CategoryDto): Promise<CategoryDto>{
//       const saved = await this.categoryRepository.save(CategoryDto);
//       return plainToInstance(CategoryDto, saved);
//   }

// }


