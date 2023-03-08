import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';
import { PostDTO } from './posts.dto';


@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}
    
    // @Get()
    // async getPosts() {
    //     const posts = await this.postsService.getPosts();
    //     return posts;
    // }

    // @Get(':postId')
    // async getPost(@Param('postId') postId) {
    //     const post = await this.postsService.getPost(postId);
    //     return post;
    // }

    // @Post()
    // async addPost(@Body() createPostDto: CreatePostDto) {
    //     const post = await this.postsService.addPost(createPostDto);
    //     return post;
    // }

    // @Delete()
    // async deletePost(@Query() query) {
    //     const posts = await this.postsService.deletePost(query.postId);
    //     return posts;
    // }

    createPost(@Body() post: PostDTO): PostDTO{
        return null;
    }
}
