import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware} from '../filters/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
require('dotenv').config()
import { CategoryEntity } from './category/category.entity';
import { ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';
//dimport { PostModule } from './post/post.module';
import { CategoryDetailModule } from './category-detail/categoryDetail.module';
import { JobPostDetailModule } from './job-post-detail/jobPostDetail.module';
import { JobPostModule } from './job-post/jobPost.module';
import { CategoryDetailEntity } from './category-detail/categoryDetail.entity';
import { JobPostDetailEntity } from './job-post-detail/jobPostDetail.entity';
import { JobPostEntity } from './job-post/jobPost.entity';
import { PostModule } from './post/post.module';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'user-consumer'
          }
        }
      },
    ]),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'freelancerproject-post',
        entities: [CategoryEntity, CategoryDetailEntity,JobPostEntity, JobPostDetailEntity, ],
        synchronize: false, // fix: false -> migration
      }),CategoryModule, CategoryDetailModule,JobPostModule, JobPostDetailModule,
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/UserFiver'),PostModule,],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // }
  ],
})

export class AppModule  {// implements NestModule
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .exclude(
  //       { path: 'users', method: RequestMethod.GET },
  //       { path: 'users', method: RequestMethod.POST },
  //       'cats/(.*)',)
  //     .forRoutes({path: 'posts', method: RequestMethod.GET} ); // .forRoutes(CatsController);
  // }

}
