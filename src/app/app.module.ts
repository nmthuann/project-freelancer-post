import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { PostsModule } from './users/users.module';UsersModule, PostsModule
import { LoggerMiddleware} from '../common/middlewares/logger.middleware';
import { DatabaseModule } from '../configs/database.module';

import { JobPostModule } from './modules/JobPost.module';
import { CategoryService } from './services/Category.service';

@Module({
  imports: [JobPostModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, CategoryService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users', method: RequestMethod.POST },
        'cats/(.*)',)
      .forRoutes({path: 'posts', method: RequestMethod.GET} ); // .forRoutes(CatsController);
  }
}
