import { BaseEntity } from "src/common/base/base.entity"
import { Entity, PrimaryGeneratedColumn, Column,
    OneToOne, JoinColumn } from "typeorm"
import { CategoryEntity } from "../category/category.entity"

@Entity({name:'CategoryDetails'})
export class CategoryDetailEntity extends BaseEntity  { //extends BaseEntity
    @PrimaryGeneratedColumn()
    category_detail_id: number

    @OneToOne(() => CategoryEntity)
    @JoinColumn()
    category: CategoryEntity

    @Column({nullable: false})
    category_detail_name: string
}
