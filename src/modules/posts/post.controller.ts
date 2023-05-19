import { Controller, Get, Post, Body, Param, Inject, UseGuards,Request} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post-dto/post.dto';
import { UpdatePostDto } from './post-dto/update-post.dto';
import { UserRoleGuard } from 'src/common/guards/user.role.guard';
import { AdminRoleGuard } from 'src/common/guards/admin.role.guard';


@Controller('posts')
export class PostController {
  constructor(
    // private readonly postApiGatewayService: PostApiGatewayService,
    private readonly postService: PostService,
    // @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) {}


  @UseGuards(UserRoleGuard)
  @Post('create')
  async createPost(@Request() req: any, @Body() postDto: PostDto){
    const email = req['email'];
    return await this.postService.CreatePost(email, postDto);
  }

  // @Post('update/:name')
  // async updatePost(@Param('name') name: string, @Body() postDto: UpdatePostDto){
  //   return await this.postService.updatePost(name, postDto);
  // }

  @UseGuards(AdminRoleGuard)
  @Get('post-list')
  async getPosts(){
    return await this.postService.getPosts();
  }

}
