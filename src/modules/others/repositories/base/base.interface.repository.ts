import { EntityId } from 'typeorm/repository/EntityId'
import { DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, UpdateResult } from 'typeorm'

export interface IRepository<T> {
  create(data: DeepPartial<T>): T
  createMany(data: DeepPartial<T>[]): T[];
  save(data: DeepPartial<T>): Promise<T>;
  findOneById(id:number): Promise<T>; // number ???
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
  findAllObject(options?: FindManyOptions<T>): Promise<T[]>;
  preload(data: DeepPartial<T>): Promise<T>;
  updateById(id: EntityId, data: T): Promise<UpdateResult>;
  remove(data: T): Promise<T>;
  removeById(id: EntityId): Promise<DeleteResult>;
  checkExist(id: EntityId): boolean
  //getAll(): Promise<T>;
}