import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Packages' })
export class PackageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  package_id: number;

  @Column({ nullable: false })
  package_name: string;

  @Column()
  description: string;
}
