import { Module } from '@nestjs/common';
import { JobPostDetailController } from './job-post-detail.controller';
import { JobPostDetailService } from './job-post-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostDetailEntity } from './job-post-detail.entity';
import { JobPostModule } from '../job-post/job-post.module';
import { JobPostEntity } from '../job-post/job-post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobPostDetailEntity, JobPostEntity]),
    JobPostModule,
  ],
  controllers: [JobPostDetailController],
  providers: [
    {
      provide: 'IJobPostDetailService',
      useClass: JobPostDetailService,
    },
  ],
  exports: ['IJobPostDetailService'],
})
export class JobPostDetailModule {}
