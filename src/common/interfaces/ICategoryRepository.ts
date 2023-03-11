import { CategoryEntity } from "src/modules/category/category.entity";
import { IRepository } from "./interface.repository";

export interface ICategoryRepository extends IRepository<CategoryEntity> {
    // định nghĩa các phương thức riêng cho CategoryRepository
    findById(id: number): Promise<CategoryEntity>;
  }