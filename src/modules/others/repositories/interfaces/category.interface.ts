import { CategoryEntity } from "src/modules/category/category.entity";
import { Repository } from "typeorm";
import { IRepository } from "../base/base.interface.repository";

export interface ICategoryRepository extends Repository<CategoryEntity>{
}