import { Module } from '@nestjs/common';
import { JobPostDetailController } from './jobPostDetail.controller';
import { JobPostDetailService } from './jobPostDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostDetailEntity } from './jobPostDetail.entity';
import { JobPostModule } from '../job-post/jobPost.module';
import { JobPostEntity } from '../job-post/jobPost.entity';

@Module({
  imports:[TypeOrmModule.forFeature([JobPostDetailEntity, JobPostEntity]), JobPostModule],
  controllers: [JobPostDetailController],
  providers: [
    {
      provide: 'IJobPostDetailService',
      useClass: JobPostDetailService,
    }, 
  ],
  exports: ['IJobPostDetailService']
})
export class JobPostDetailModule {}
