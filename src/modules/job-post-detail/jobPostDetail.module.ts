import { Module } from '@nestjs/common';
import { JobPostDetailController } from './jobPostDetail.controller';
import { JobPostDetailService } from './jobPostDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostDetailEntity } from './jobPostDetail.entity';


//  TypeOrmModule.forFeature([JobPostDetailEntity])
@Module({
  imports:[TypeOrmModule.forFeature([JobPostDetailEntity])],
  controllers: [JobPostDetailController],
  providers: [JobPostDetailService]
})
export class JobPostDetailModule {}
