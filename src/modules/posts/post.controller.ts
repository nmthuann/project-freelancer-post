import { Controller, Get, Post, Body, Param, Inject} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post-dto/post.dto';
import { UpdatePostDto } from './post-dto/update-post.dto';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { PostApiGatewayService } from './post-api.service';

@Controller('posts')
export class PostController {
  constructor(
    // private readonly postApiGatewayService: PostApiGatewayService,
    private readonly postService: PostService,
    // @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) {}


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

}
