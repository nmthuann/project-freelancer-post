import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, DeepPartial } from "typeorm"

@Entity({name:'C    ategoryDetails'})
export class CategoryEntity  { //extends BaseEntity
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({nullable: false})
    category_name: string

    @Column()
    description: string

    @CreateDateColumn(
    {type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    timestamp: Date

}
