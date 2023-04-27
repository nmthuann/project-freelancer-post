import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from '../job-post/jobPost.entity';
import { CategoryDetailController } from './categoryDetail.controller';
import { CategoryDetailEntity } from './categoryDetail.entity';
import { CategoryDetailService } from './categoryDetail.service';
import { CategoryModule } from '../category/category.module';
import { CategoryEntity } from '../category/category.entity';
import { CategoryService } from '../category/category.service';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryDetailEntity]), CategoryModule],
  controllers: [CategoryDetailController],
  providers: [
    {
      provide: 'ICategoryDetailService',
      useClass: CategoryDetailService,
    }, 
  ],
  exports: ['ICategoryDetailService']
})

export class CategoryDetailModule {
}
