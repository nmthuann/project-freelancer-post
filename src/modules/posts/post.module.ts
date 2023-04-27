import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPostDetail, Post, PostSchema } from './post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CategoryDetailService } from '../category-detail/categoryDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDetailEntity } from '../category-detail/categoryDetail.entity';
import { JobPostService } from '../job-post/jobPost.service';
import { JobPostDetailService } from '../job-post-detail/jobPostDetail.service';
import { CategoryModule } from '../category/category.module';
import { CategoryDetailModule } from '../category-detail/categoryDetail.module';
import { JobPostDetailModule } from '../job-post-detail/jobPostDetail.module';
import { JobPostModule } from '../job-post/jobPost.module';
import { CategoryController } from '../category/category.controller';
import { CategoryDetailController } from '../category-detail/categoryDetail.controller';
import { JobPostDetailController } from '../job-post-detail/jobPostDetail.controller';
import { JobPostController } from '../job-post/jobPost.controller';
import { CategoryEntity } from '../category/category.entity';
import { JobPostDetailEntity } from '../job-post-detail/jobPostDetail.entity';
import { JobPostEntity } from '../job-post/jobPost.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  TypeOrmModule.forFeature([JobPostDetailEntity, JobPostEntity, CategoryDetailEntity])],
  controllers: [PostController, ],
  providers: [PostService, CategoryDetailService, JobPostDetailService, JobPostService ],
})
export class PostModule {}
