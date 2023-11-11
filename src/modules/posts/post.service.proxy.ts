import { Injectable } from '@nestjs/common';
import { IPostService } from './post.service.interface';
import { PostService } from './post.service';
import { PostDto } from './post-dto/post.dto';
import { PostCustomDto } from './post-dto/post-custom.dto';
import { PostOrderDto } from './post-dto/post-order.dto';

@Injectable()
export class PostServiceProxy implements IPostService {
  // private postService: PostService = null;
  constructor(private readonly postService: PostService) {}
  
  async getPosts(): Promise<PostDto[]> {
    // Xử lý yêu cầu từ client, ví dụ: ghi log, xác thực, caching, v.v.
    console.log('Proxy Service - Get Posts');
    // Gọi phương thức tương ứng trên Post Service
    return await this.postService.getPosts();
  }

  async createPost(email: string, post: PostDto): Promise<PostDto | any> {
    // Xử lý yêu cầu từ client, ví dụ: ghi log, xác thực, v.v.
    console.log('Proxy Service - Create Post');
    
    // Gọi phương thức tương ứng trên Post Service
    return await this.postService.createPost(email, post);
  }


  async findPostById(postId: number): Promise<PostDto> {
    console.log('Proxy Service - findPostById');
    return await this.postService.findPostById(postId);
  }


  async getPostByEmail(email: string): Promise<PostDto[]> {
    console.log('Proxy Service - getPostByEmail');
    return await this.postService.getPostByEmail(email);
  }


  async getPostsByCategoryDetailId(category_detail_id: number): Promise<PostCustomDto[]> {
    console.log('Proxy Service - getPostsByCategoryDetailId');
    return await this.postService.getPostsByCategoryDetailId(category_detail_id);
  }


  async getPostList(): Promise<PostCustomDto[]> {
     console.log('Proxy Service - getPostList');
    return await this.postService.getPostList();
  }


  async getPostForOrder(data: any): Promise<PostOrderDto> {
    console.log('Proxy Service - getPostForOrder');
    return await this.postService.getPostForOrder(data);
  }

  
  async updatePost(id: number, email: string, postDto: PostDto): Promise<any> {
     console.log('Proxy Service - updatePost');
    return await this.postService.updatePost(id,email,postDto);
  }

  
}
