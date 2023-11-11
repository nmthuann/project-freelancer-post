import { Controller, Get, Post, Body, Param, Inject, UseGuards,Request, Put} from '@nestjs/common';
import { PostDto } from './post-dto/post.dto';
import { UserRoleGuard } from 'src/common/guards/user.role.guard';
import { PostServiceProxy } from './post.service.proxy';


@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostServiceProxy,
  ) {}

  @UseGuards(UserRoleGuard)
  @Post('create')
  async createPost(@Request() req: any, @Body() postDto: PostDto){
    const email = req['email'];
    return await this.postService.createPost(email, postDto);
  }

  @UseGuards(UserRoleGuard)
  @Put('update/:id')
  async updatePost(
    @Param('id') id: number, 
    @Request() req: any, 
    @Body() postDto: PostDto
  ): Promise<PostDto>{
    const email = req['email'];
    return await this.postService.updatePost(id, email, postDto);
  }

  // @Public()
  @Get('get-posts')
  async getPosts(){
    return await this.postService.getPosts();
  }

  @Get('get-posts/:id')
  async getPostsByCategoryDetailId(@Param('id') id: number){
    return await this.postService.getPostsByCategoryDetailId(id);
  }

  @Get('get-post/:id')
  async findPostById(@Param('id') id: number){
    return await this.postService.findPostById(id);
  }

  @UseGuards(UserRoleGuard)
  @Get('get-post-user')
  async getPostByEmail(@Request() req: any){
    const email = req['email']
    return await this.postService.getPostByEmail(email);
  }

}