import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, Repository, UpdateResult } from "typeorm";
import { EntityId } from "typeorm/repository/EntityId";
import { CategoryEntity } from "../category.entity";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { IRepository } from "./base/base.interface.repository";
//import { ICategoryRepository } from "./interfaces/category.interface";

@Injectable()
export class CategoryRepository implements IRepository<CategoryEntity>  {
    private categoryRepository: Repository<CategoryEntity>;
    constructor(categoryRepository: Repository<CategoryEntity>) {
        this.categoryRepository = categoryRepository;
    }
    findOneById(id: number): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    findAllObject(options?: FindManyOptions<CategoryEntity>): Promise<CategoryEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(data: DeepPartial<CategoryEntity>): CategoryEntity {
        throw new Error("Method not implemented.");
    }
    createMany(data: DeepPartial<CategoryEntity>[]): CategoryEntity[] {
        throw new Error("Method not implemented.");
    }
    save(data: DeepPartial<CategoryEntity>): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    public async findOneByIdAA(id: number): Promise<CategoryEntity> {
        return await this.categoryRepository.findOneById(id);
    }
    findByCondition(filterCondition: FindOneOptions<CategoryEntity>): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    preload(data: DeepPartial<CategoryEntity>): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    updateById(id: EntityId, data: CategoryEntity): Promise<UpdateResult> {
        throw new Error("Method not implemented.");
    }
    remove(data: CategoryEntity): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    removeById(id: EntityId): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }
    checkExist(id: EntityId): boolean {
        throw new Error("Method not implemented.");
    }
    
    //  private categoryRepository: Repository<CategoryEntity>;
    // // constructor(categoryRepository: Repository<CategoryEntity>) {
    // //     this.categoryRepository = categoryRepository
    // // }
    //   async findAllObject(): Promise<CategoryEntity[]> {
    //     return this.categoryRepository.;
    //   }
    
}