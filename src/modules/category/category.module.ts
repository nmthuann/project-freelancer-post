import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationMiddleware } from 'src/middlewares/authentication.middleware';
import { CategoryController } from 'src/modules/category/category.controller';
import { CategoryEntity } from 'src/modules/category/category.entity';
import { CategoryService } from 'src/modules/category/category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: 60 },
    }),
  ],
  controllers: [CategoryController],
  providers: [
    {
      provide: 'ICategoryService',
      useClass: CategoryService,
    },
  ],
  exports: ['ICategoryService'],
})
export class CategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        { path: 'category/get-categories', method: RequestMethod.GET },
        {
          path: 'category/category-detail-list/:id',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(CategoryController);
  }
}
