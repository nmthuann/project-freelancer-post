import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 'JobPost'
})
export class JobPostEntity{
    @PrimaryGeneratedColumn()
    post_id: number

    @Column()
    categorydetail_id: number

    @Column()
    post_name: string

    @Column()
    timestamp: Date

    @Column()
    vote: Number
}


