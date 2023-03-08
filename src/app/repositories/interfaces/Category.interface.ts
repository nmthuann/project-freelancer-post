import { CategoryEntity } from "src/app/models/Category.entity";
import { IRepository } from "../base/Base.interface.repository";

export interface ICategoryRepository extends IRepository<CategoryEntity>{
}