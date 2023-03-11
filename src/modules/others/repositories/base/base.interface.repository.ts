import { EntityId } from 'typeorm/repository/EntityId'
import { DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, FindOptionsWhere, InsertResult, ObjectID, RemoveOptions, SaveOptions, UpdateResult } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IERepository<T> {
  getAll(): T[];
  getById(id: number): T;
  findOne(options: FindOneOptions<T>): Promise<T | null>;
  create(): T;
  createMany(entityLikeArray: DeepPartial<T>[]): T[];
  preloadData(entityLike: DeepPartial<T>): Promise<T | undefined>;
  save(entity: T, options: SaveOptions & {
    reload: false;
  }): Promise<T>;
  remove(entities: T[], options?: RemoveOptions): Promise<T[]>;
  insert(entity: QueryDeepPartialEntity<T> | QueryDeepPartialEntity<T>[]): Promise<InsertResult>;
  update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>,
     partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
  delete(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>): Promise<DeleteResult>;
  softDelete(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<T>): Promise<UpdateResult>;
}











/**
 * with preloadData
     * Saves all given entities in the database.
     * If entities do not exist in the database then inserts, otherwise updates.
     */


  /**
   * with Insert
     * Updates entity partially. Entity can be found by a given conditions.
     * Unlike save method executes a primitive operation without cascades, relations and other operations included.
     * Executes fast and efficient UPDATE query.
     * Does not check if entity exist in the database.
     */

  /**
   * with update
     * Inserts a given entity into the database, unless a unique constraint conflicts then updates the entity
     * Unlike save method executes a primitive operation without cascades, relations and other operations included.
     * Executes fast and efficient INSERT ... ON CONFLICT DO UPDATE/ON DUPLICATE KEY UPDATE query.
     */

  /**
   * with delete
      * Records the delete date of entities by a given criteria.
      * Unlike save method executes a primitive operation without cascades, relations and other operations included.
      * Executes fast and efficient SOFT-DELETE query.
      * Does not check if entity exist in the database.
      */

   /**
    * with softDelete
      * Restores entities by a given criteria.
      * Unlike save method executes a primitive operation without cascades, relations and other operations included.
      * Executes fast and efficient SOFT-DELETE query.
      * Does not check if entity exist in the database.
      */