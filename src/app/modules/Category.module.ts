import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from '../controllers/Category.controller';
import { CategoryEntity } from '../models/Category.entity';
import { CategoryRepository } from '../repositories/Category.repository';
import { CategoryService } from '../services/Category.service';


//  TypeOrmModule.forFeature([JobPostEntity])
@Module({
  imports:[TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [,
    {
      provide:'ICategoryRepository',
      useClass: CategoryRepository
    },
  ]
})
export class CategoryModule {}
