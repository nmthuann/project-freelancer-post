import { Module } from '@nestjs/common';
import { JobPostController } from './jobPost.controller';
import { JobPostService } from './jobPost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from './jobPost.entity';
import { CategoryDetailModule } from '../category-detail/categoryDetail.module';
import { CategoryDetailEntity } from '../category-detail/categoryDetail.entity';
import { CategoryDetailService } from '../category-detail/categoryDetail.service';

@Module({
  imports:[TypeOrmModule.forFeature([JobPostEntity, CategoryDetailEntity]), CategoryDetailModule],
  controllers: [JobPostController],
  providers: [
    {
      provide: 'IJobPostService',
      useClass: JobPostService,
    },
  ],
  exports: ['IJobPostService']
})
export class JobPostModule {}
