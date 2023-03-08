import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { PostsModule } from './users/users.module';UsersModule, PostsModule
import { LoggerMiddleware} from '../common/middlewares/logger.middleware';
import { DatabaesModule } from '../configs/database.module';
import { JobPostController } from './controllers/JobPost.controller';

@Module({
  imports: [JobPostController, DatabaesModule],
  controllers: [AppController],
  providers: [AppService],
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
