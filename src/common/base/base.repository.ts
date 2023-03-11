import { InjectRepository } from "@nestjs/typeorm";
import { BaseEntity, DeepPartial, FindOptionsWhere, ObjectID, SaveOptions } from "typeorm";
import { IRepository } from "../interfaces/interface.repository";

abstract class BaseRepository<T> implements IRepository<T> {
    protected items: T[] = [];
  
    async create(data: T): Promise<T> {
      this.items.push(data);
      return data;
    }
  
    async update(id: number, data: T): Promise<T> {
      const index = this.items.findIndex((item) => item === data);
      if (index !== -1) {
        this.items[index] = data;
        return data;
      }
      return null;
    }
  
    delete(id: number): void {
      this.items = this.items.filter((item) => item["id"] !== id);
    }
    async findAll(): Promise<T[]> {
        return this.items;
    }
    abstract findById(id: number): Promise<T>;
    abstract save<T>(entity: T, options?: SaveOptions): Promise<T> ;
    abstract preloadData(entityLike: DeepPartial<T>): Promise<T>;
  }