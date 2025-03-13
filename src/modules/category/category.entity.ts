import { BaseEntity } from 'src/common/bases/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoryDetailEntity } from '../category-detail/category-detail.entity';

@Entity({ name: 'Categories' })
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ nullable: false })
  category_name: string;

  @Column()
  description: string;

  @OneToMany(
    () => CategoryDetailEntity,
    (category_detail) => category_detail.category,
  )
  category_detail: CategoryDetailEntity;
}
