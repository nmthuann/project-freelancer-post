import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryMiddleware } from 'src/common/middlewares/category.middleware';
//import { Categoies } from '../entities/entities/Categoies';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';


@Module({
  imports:[TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(CategoryMiddleware)
  //     .forRoutes('*');
  // }
}
