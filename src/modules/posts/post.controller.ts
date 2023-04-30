import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post-dto/post.dto';
import { UpdatePostDto } from './post-dto/update-post.dto';

@Controller('posts')
export class PostController {
    
  constructor(private readonly postService: PostService,) {}
  @Post('create')
  async createPost(@Body() postDto: PostDto){
    console.log(postDto.post_detail.profile_user, "Create Post Controller!")
    return await this.postService.CreatePost(postDto);
  }

  @Post('update/:name')
  async updatePost(@Param('name') name: string, @Body() postDto: UpdatePostDto){
    return await this.postService.updatePost(name, postDto);
  }

  @Get('post-list')
  async getPosts(){
    return await this.postService.getPosts();
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
