import { Controller, Get, Post, Body, Param, Inject, UseGuards,Request} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post-dto/post.dto';
import { UpdatePostDto } from './post-dto/update-post.dto';
import { UserRoleGuard } from 'src/common/guards/user.role.guard';
import { AdminRoleGuard } from 'src/common/guards/admin.role.guard';
import { Public } from 'src/common/decorators/public.decorator';


@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @UseGuards(UserRoleGuard)
  @Post('create')
  async createPost(@Request() req: any, @Body() postDto: PostDto){
    const email = req['email'];
    return await this.postService.CreatePost(email, postDto);
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


  // @Get('get-post-list')
  // async getPostList(){
  //   return await this.postService.getPostList();
  // }

  // @Post('update/:name')
  // async updatePost(@Param('name') name: string, @Body() postDto: UpdatePostDto){
  //   return await this.postService.updatePost(name, postDto);
  // }