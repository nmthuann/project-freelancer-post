import { BaseEntity } from "src/modules/bases/base.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { JobPostEntity } from "../job-post/jobPost.entity"

@Entity({name: 'JobPostDetails'})
export class JobPostDetailEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    job_post_detail_id: number

    @Column()
    profile_user: string

    @Column()
    description: string

    @Column()
    FAQ: string

    @OneToOne(() => JobPostEntity, (job_post) => job_post.job_post_detail)
    @JoinColumn()
    job_post: JobPostEntity
}


