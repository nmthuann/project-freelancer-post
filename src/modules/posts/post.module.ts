import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDetailEntity } from '../category-detail/category-detail.entity';
import { CategoryDetailModule } from '../category-detail/category-detail.module';
import { JobPostDetailModule } from '../job-post-detail/job-post-detail.module';
import { JobPostModule } from '../job-post/job-post.module';
import { JobPostDetailEntity } from '../job-post-detail/job-post-detail.entity';
import { JobPostEntity } from '../job-post/job-post.entity';
import { KafkaModule } from '../kafka/kafka.module';
import { PostAuthService } from './services/post-auth.service';
import { AuthenticationMiddleware } from 'src/middlewares/authentication.middleware';
import { AdminRoleGuard } from 'src/guards/admin.role.guard';
import { UserRoleGuard } from 'src/guards/user.role.guard';
import { JwtModule } from '@nestjs/jwt';
import { PostServiceProxy } from './post.service.proxy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    TypeOrmModule.forFeature([
      JobPostDetailEntity,
      JobPostEntity,
      CategoryDetailEntity,
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: 60 },
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
    PostServiceProxy,
  ],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        { path: 'posts/get-posts', method: RequestMethod.GET },
        { path: 'posts/get-posts/:id', method: RequestMethod.GET },
        { path: 'posts/get-post/:id', method: RequestMethod.GET },
      )
      .forRoutes(PostController);
  }
}
