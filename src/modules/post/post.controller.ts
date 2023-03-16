import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post.dto';
//import { Post as PostModel } from './interfaces/post.interface';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() postDto: PostDto){
    console.log(postDto.job_post_detail.profile_name)
    return this.postService.CreatePost(postDto);
  }

  // @Get()
  // async findAll(): Promise<PostDto[]> {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // async findById(@Param('id') id: number): Promise<PostDto> {
  //   return this.postService.findById(id);
  // }

  // @Put(':id')
  // async update(@Param('id') id: number, @Body() postDto: PostDto): Promise<PostDto> {
  //   return this.postService.update(id, postDto);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<PostDto> {
  //   return this.postService.delete(id);
  // }
}
