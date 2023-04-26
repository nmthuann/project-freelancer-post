import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { CategoryModule } from 'src/modules/category/category.module'
require('dotenv').config()
import { CategoryEntity } from 'src/modules/category/category.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'USER_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'auth',
    //         brokers: ['localhost:9092'],
    //       },
    //       consumer: {
    //         groupId: 'user-consumer'
    //       }
    //     }
    //   },
    // ]),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'freelancerproject-post',
        entities: [CategoryEntity],// CategoryDetailEntity,JobPostEntity, JobPostDetailEntity,
        synchronize: false, // fix: false -> migration
      }),CategoryModule, 
      //CategoryDetailModule,JobPostModule, JobPostDetailModule,
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/UserFiver'),
      //PostModule,
    ],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // }
  ],
})

export default class AppModule  {// implements NestModule
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
