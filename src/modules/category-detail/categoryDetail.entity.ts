import { BaseEntity } from "src/modules/bases/base.entity"
import { Entity, PrimaryGeneratedColumn, Column,
    OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { CategoryEntity } from "../category/category.entity"
import { JobPostEntity } from "../job-post/jobPost.entity"

@Entity({name:'CategoryDetails'})
export class CategoryDetailEntity extends BaseEntity  { 
    @PrimaryGeneratedColumn()
    category_detail_id: number

    @Column({nullable: false})
    category_detail_name: string

    @ManyToOne(() => CategoryEntity, (category) => category.category_detail)
    category: CategoryEntity

    @OneToOne(() => JobPostEntity, (job_post) => job_post.category_detail)
    //@JoinColumn()
    job_post: JobPostEntity
}
