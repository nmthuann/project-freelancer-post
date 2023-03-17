import { Module } from '@nestjs/common';
import { JobPostController } from './jobPost.controller';
import { JobPostService } from './jobPost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from './jobPost.entity';
//import { CategoryDetailEntity } from '../category-detail/CategoryDetail.entity';


//  TypeOrmModule.forFeature([JobPostEntity])
@Module({
  imports:[TypeOrmModule.forFeature([JobPostEntity])],
  controllers: [JobPostController],
  providers: [JobPostService]
})
export class JobPostModule {}
