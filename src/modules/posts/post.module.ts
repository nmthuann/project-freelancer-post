import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  Post, PostSchema } from './post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CategoryDetailService } from '../category-detail/categoryDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDetailEntity } from '../category-detail/categoryDetail.entity';
import { JobPostService } from '../job-post/jobPost.service';
import { JobPostDetailService } from '../job-post-detail/jobPostDetail.service';
import { CategoryModule } from '../category/category.module';
import { CategoryDetailModule } from '../category-detail/categoryDetail.module';
import { JobPostDetailModule } from '../job-post-detail/jobPostDetail.module';
import { JobPostModule } from '../job-post/jobPost.module';
import { CategoryController } from '../category/category.controller';
import { CategoryDetailController } from '../category-detail/categoryDetail.controller';
import { JobPostDetailController } from '../job-post-detail/jobPostDetail.controller';
import { JobPostController } from '../job-post/jobPost.controller';
import { CategoryEntity } from '../category/category.entity';
import { JobPostDetailEntity } from '../job-post-detail/jobPostDetail.entity';
import { JobPostEntity } from '../job-post/jobPost.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from '../kafka/kafka.module';
import { PostAuthService } from './services/post-auth.service';
import { AuthenticationMiddleware } from 'src/common/middlewares/authentication.middleware';
import { AdminRoleGuard } from 'src/common/guards/admin.role.guard';
import { UserRoleGuard } from 'src/common/guards/user.role.guard';
import { JwtModule } from '@nestjs/jwt';
import { PostServiceProxy } from './post.service.proxy';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    TypeOrmModule.forFeature([
      JobPostDetailEntity, 
      JobPostEntity, 
      CategoryDetailEntity
    ]),
    JwtModule.register({
          secret: process.env.JWT_SECRET_KEY,
          signOptions: { expiresIn: 60},
        }),
    CategoryDetailModule,
    JobPostModule,
    JobPostDetailModule,
    KafkaModule,
  ],
  controllers: [PostController],
  providers: [
    PostService,
    PostAuthService,
    AdminRoleGuard,
    UserRoleGuard,
    PostServiceProxy
  ],
})
export class PostModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthenticationMiddleware)
        .exclude(
          { path: 'posts/get-posts', method: RequestMethod.GET },
          { path: 'posts/get-posts/:id', method: RequestMethod.GET },
          { path: 'posts/get-post/:id', method: RequestMethod.GET },
          )
        .forRoutes(PostController);
    }
}