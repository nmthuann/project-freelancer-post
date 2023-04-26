import { BaseEntity } from "src/modules/bases/base.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { JobPostEntity } from "../job-post/jobPost.entity"

@Entity({name: 'JobPostDetails'})
export class JobPostDetailEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    job_post_detail_id: number

    @OneToOne(() => JobPostEntity)
    @JoinColumn()
    job_post: JobPostEntity

    //@OneToOne(() => ProfileEntity)
    //@JoinColumn()
    @Column()
    profile_id: number

    @Column()
    description: string

    // @OneToMany(() => PackageEntity, (packages) => packages.package_id)
    // packages: PackageEntity[]

    @Column()
    FAQ: string
}


