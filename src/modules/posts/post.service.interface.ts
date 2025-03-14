import { PostCustomDto } from './dtos/post-custom.dto';
import { PostOrderDto } from './dtos/post-order.dto';
import { PostDto } from './dtos/post.dto';

export interface IPostService {
  getPosts(): Promise<PostDto[]>;
  findPostById(postId: number): Promise<PostDto>;
  getPostByEmail(email: string): Promise<PostDto[]>;
  getPostsByCategoryDetailId(
    category_detail_id: number,
  ): Promise<PostCustomDto[]>;
  getPostList(): Promise<PostCustomDto[]>;
  getPostForOrder(data: any): Promise<PostOrderDto>;
  createPost(email: string, postDto: PostDto): Promise<PostDto>;
  updatePost(id: number, email: string, postDto: PostDto): Promise<PostDto>;
}
