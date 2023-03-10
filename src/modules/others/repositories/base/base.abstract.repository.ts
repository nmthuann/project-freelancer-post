import {  BaseEntity, DeepPartial, DeleteResult,
     FindManyOptions, FindOneOptions, FindOptionsWhere,
      Repository, UpdateResult } from 'typeorm'

import { EntityId } from 'typeorm/repository/EntityId'
import { IRepository } from './base.interface.repository'
//import { LoggerService } from 'src/logs/custom.logger'

// interface BaseEntity{

// }

export  abstract class BaseAbstractRepository<T extends BaseEntity> implements IRepository<T> {
    private entity: Repository<T>;
    constructor(entity: Repository<T>) {
        this.entity = entity;
    }
    // public async getAll(): Promise<T> {
    //     return await this.entity.
    // }

    public async save(data: DeepPartial<T>): Promise<T> {
        return await this.entity.save(data);
    }

    public create(data: DeepPartial<T>): T {
        return this.entity.create(data);
    }

    public createMany(data: DeepPartial<T>[]): T[] {
        return this.entity.create(data);
    }
    
    public async findOneById(id: any): Promise<T> {
        // const options: FindOptionsWhere<T> = {
        //     id: id
        // }return await this.entity.findOneBy(options);
        return await this.entity.findOneBy(id);
    }


    public async findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
        //throw new Error('Method not implemented.')
        return await this.entity.findOne(filterCondition);
    }


    public async findAllObject(options?: FindManyOptions<T>): Promise<T[]> {
        //throw new Error('Method not implemented.')
        return await this.entity.find(options);
    }

    
    public async preload(data: DeepPartial<T>): Promise<T> {
        //throw new Error('Method not implemented.')
        return await this.entity.preload(data);
    }

    public async updateById(id: EntityId, data: T): Promise<UpdateResult> {
        
        if(!this.checkExist(id))
            return this.updateById(id,data)
        else
            throw new Error('Method not implemented.')
    }

    public async remove(data: T): Promise<T> {
        return await this.entity.remove(data);
    }

    public async removeById(id: EntityId): Promise<DeleteResult> {
        if (!this.checkExist(id))
            return await this.entity.delete(id);
        else
            throw new Error('NOT FOUND BY ID ')
    }

    public checkExist(id: EntityId): boolean {
        if (this.findOneById(id)!=null)
            return true;
    }

    
}
