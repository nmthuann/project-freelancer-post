import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "../models/Category.entity";
import { BaseAbstractRepository } from "./base/Base.abstract.repository";
import { ICategoryRepository } from "./interfaces/Category.interface";

@Injectable()
export class CategoryRepository 
    extends BaseAbstractRepository <CategoryEntity>
        implements ICategoryRepository{
    
    constructor(@InjectRepository(CategoryEntity) 
    private readonly categoryRepository: Repository<CategoryEntity>,){
        super(categoryRepository);
    }

}