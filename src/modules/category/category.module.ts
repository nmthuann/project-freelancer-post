import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from 'src/modules/category/category.controller';
import { CategoryEntity } from 'src/modules/category/category.entity';
import { CategoryService } from 'src/modules/category/category.service';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: 'ICategoryService',
      useClass: CategoryService,
    }, 
  ],
})
export class CategoryModule {
}
