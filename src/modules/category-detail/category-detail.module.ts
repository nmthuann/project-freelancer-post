import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDetailController } from './category-detail.controller';
import { CategoryDetailEntity } from './category-detail.entity';
import { CategoryDetailService } from './category-detail.service';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDetailEntity]), CategoryModule],
  controllers: [CategoryDetailController],
  providers: [
    {
      provide: 'ICategoryDetailService',
      useClass: CategoryDetailService,
    },
  ],
  exports: ['ICategoryDetailService'],
})
export class CategoryDetailModule {}
