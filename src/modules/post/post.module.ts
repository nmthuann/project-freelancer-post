import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPostDetail, Post, PostSchema } from '../post/post.entity';
import { PostController } from '../post/post.controller';
import { PostService } from '../post/post.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
