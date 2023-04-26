import { BaseEntity } from "src/modules/bases/base.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { CategoryDetailEntity } from "../category-detail/categoryDetail.entity"

@Entity({name: 'JobPosts'})
export class JobPostEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    job_post_id: number

    @OneToOne(() => CategoryDetailEntity)
    @JoinColumn()
    category_detail: CategoryDetailEntity

    @Column({nullable: false})
    job_post_name: string

    @Column()
    vote: number
}


