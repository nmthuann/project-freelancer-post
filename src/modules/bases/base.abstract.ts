import { DeleteResult, Repository } from "typeorm";
import { IBaseService } from "./base.interface";

export abstract class BaseService<T> implements IBaseService<T>{
  constructor(private readonly repository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async getOneById(id: number): Promise<T> {
    return await this.repository.findOneById(id);
  }

  async create(data: T): Promise<T> {
    return await this.repository.save(data);
  }

  async updateOneById(id: number, data: T): Promise<T> {
    const item = await this.repository.findOneById(id);
    return this.repository.save({ ...item, ...data });
  }

  async deleteOneById(id: number): Promise<DeleteResult> {
    return await this.repository.softDelete(id)
  }
}