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

    // @CreateDateColumn(
    // {type: 'timestamp',
    //     default: () => 'CURRENT_TIMESTAMP'
    // })
    // timestamp: Date

}






    // constructor(category_id: number, category_name: string, description: string, timestamp: Date) {
    //     super(); // Gọi constructor của BaseEntity
    //     this.category_id = category_id;
    //     this.category_name = category_name ;
    //     this.description = description;
    //     this.timestamp = timestamp;
    //   }
    