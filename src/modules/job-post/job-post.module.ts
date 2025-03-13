import { Module } from '@nestjs/common';
import { JobPostController } from './job-post.controller';
import { JobPostService } from './job-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from './job-post.entity';
import { CategoryDetailModule } from '../category-detail/category-detail.module';
import { CategoryDetailEntity } from '../category-detail/category-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobPostEntity, CategoryDetailEntity]),
    CategoryDetailModule,
  ],
  controllers: [JobPostController],
  providers: [
    {
      provide: 'IJobPostService',
      useClass: JobPostService,
    },
  ],
  exports: ['IJobPostService'],
})
export class JobPostModule {}
