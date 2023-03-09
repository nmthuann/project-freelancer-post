import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, DeepPartial } from "typeorm"

@Entity({
    name: 'Categories'
})
export class CategoryEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    private category_id: number

    @Column({nullable: false})
    category_name: string

    @Column({})
    description: string

    //@Column({nullable: false, type: 'timestamp' })
    @CreateDateColumn({nullable: false, default: `now()`,})
    timestamp: Date

    constructor(partial: DeepPartial<CategoryEntity>) {
        super()
        Object.assign(this, partial)
      }
    
    
}

