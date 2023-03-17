import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from '../job-post/jobPost.entity';
import { CategoryDetailController } from './categoryDetail.controller';
import { CategoryDetailEntity } from './categoryDetail.entity';
import { CategoryDetailService } from './categoryDetail.service';


@Module({
  imports:[TypeOrmModule.forFeature([CategoryDetailEntity])],
  controllers: [CategoryDetailController],
  providers: [CategoryDetailService]
})
export class CategoryDetailModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(CategoryMiddleware)
  //     .forRoutes('*');
  // }
}
