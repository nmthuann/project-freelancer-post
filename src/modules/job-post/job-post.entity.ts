import { BaseEntity } from 'src/common/bases/base.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CategoryDetailEntity } from '../category-detail/category-detail.entity';
import { JobPostDetailEntity } from '../job-post-detail/job-post-detail.entity';

@Entity({ name: 'JobPosts' })
export class JobPostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  job_post_id: number;

  @Column({ nullable: false })
  job_post_name: string;

  @Column({ default: 0 })
  vote: number;

  @OneToOne(
    () => CategoryDetailEntity,
    (category_detail) => category_detail.job_post,
  )
  @JoinColumn()
  category_detail: CategoryDetailEntity;

  @OneToOne(
    () => JobPostDetailEntity,
    (job_post_detail) => job_post_detail.job_post,
  )
  //@JoinColumn()
  job_post_detail: JobPostDetailEntity;
}
