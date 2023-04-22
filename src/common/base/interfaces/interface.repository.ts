// import { DeepPartial, FindOptionsWhere, ObjectID, SaveOptions } from 'typeorm'
// export interface IRepository<T> {
//   // create(data: T): Promise<T>;
//   // update(id: number, data: T): Promise<T>;
//   // delete(id: number): void;
//   // //delete(criteria: string | string[] | number | number[] |
//   // //Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>): Promise<T>;
//   // findAll(): Promise<T[]>;
//   // findById(id: number): Promise<T>;
//   // save<T>(entity: T, options?: SaveOptions): Promise<T>;
//   // preloadData(entityLike: DeepPartial<T>): Promise<T | undefined>;
//   getAll(): Promise<T>[]; 
//   getById(id: number): Promise<T>;
// }











// // getAll(): T[];
// // getById(id: number): T;
// // find(options: FindOneOptions<T>): Promise<T | null>;
// // create(): T;
// // createMany(entityLikeArray: DeepPartial<T>[]): T[];
// // preloadData(entityLike: DeepPartial<T>): Promise<T | undefined>;

// // remove(entities: T[], options?: RemoveOptions): Promise<T[]>;
// // insert(entity: QueryDeepPartialEntity<T> | QueryDeepPartialEntity<T>[]): Promise<InsertResult>;
// // update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>,
// //    partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
// // delete(criteria: string | string[] | number | number[] |
// //    Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>): Promise<DeleteResult>;
// // softDelete(criteria: string | string[] | number | number[] |
// //    Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>): Promise<UpdateResult>;