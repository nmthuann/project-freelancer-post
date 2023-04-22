import { BaseEntity } from "src/common/base/base.entity"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeepPartial } from "typeorm"

@Entity({name:'Categories'})
export class CategoryEntity extends BaseEntity { 
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column()
    description: string

}