import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IRepository } from "src/common/interfaces/interface.repository";
import { ICategoryRepository } from "src/common/interfaces/ICategoryRepository";
import { CategoryEntity } from "src/modules/category/category.entity";
import { BaseRepository } from "src/common/base/base.repository";
import { SaveOptions, DeepPartial } from "typeorm";

//@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity> {
  
  // constructor(@InjectRepository(CategoryEntity) 
  //   private readonly caterogyRepository: ICategoryRepository) {}

    save<T>(entity: T, options?: SaveOptions): Promise<T> {
      throw new Error("Method not implemented.");
    }
    preloadData(entityLike: DeepPartial<CategoryEntity>): Promise<CategoryEntity> {
      throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<CategoryEntity> {
      //return this.items.find(item => item.id === id);
      throw new Error("Method not implemented.");
    }
}




// async createCategory(category: CategoryEntity): Promise<CategoryEntity> {
//   return await this.caterogyRepository.save(category);
// }

// async getCategoryById(id: number): Promise<CategoryEntity | undefined> {
//   return await this.caterogyRepository.getById(id);
// }

// async updateCategory(id: number, category: CategoryEntity): Promise<CategoryEntity | undefined> {
//   await this.caterogyRepository.update(id, category);
//   return await this.caterogyRepository.getById(id);
// }

// async deleteCategory(id: number): Promise<void> {
//   await this.caterogyRepository.delete(id);
// }
