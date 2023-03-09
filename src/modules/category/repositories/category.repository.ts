import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "../category.entity";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
//import { ICategoryRepository } from "./interfaces/category.interface";

@Injectable()
export class CategoryRepository extends BaseAbstractRepository <CategoryEntity>{
    // constructor(@InjectRepository(CategoryRepository) private categoryRepository: CategoryRepository){
    //     super(categoryRepository);
    // }

    
}