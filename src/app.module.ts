import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { CategoryModule } from 'src/modules/category/category.module'
require('dotenv').config()
import { CategoryEntity } from 'src/modules/category/category.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryDetailEntity } from './modules/category-detail/categoryDetail.entity';
import { CategoryDetailModule } from './modules/category-detail/categoryDetail.module';
import { JobPostEntity } from './modules/job-post/jobPost.entity';
import { JobPostDetailEntity } from './modules/job-post-detail/jobPostDetail.entity';
import { JobPostModule } from './modules/job-post/jobPost.module';
import { JobPostDetailModule } from './modules/job-post-detail/jobPostDetail.module';
import { PostModule } from './modules/posts/post.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth-consumer',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-service',
          },
        },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'order-consumer',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'order-service',
          },
        },
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
        entities: [
          CategoryEntity, 
          CategoryDetailEntity,
          JobPostEntity, 
          JobPostDetailEntity
        ],
        synchronize: false, // fix: false -> migration
      }),
      CategoryModule, 
      CategoryDetailModule,
      JobPostModule, 
      JobPostDetailModule,
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/UserFiver'),
      PostModule,
    ],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // }
  ],
})

export default class AppModule  {
}
