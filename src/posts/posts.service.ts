import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDTO } from './posts.dto';
import { PostEntity } from './posts.entity';
import { POSTS } from './posts.mock';


@Injectable()
export class PostsService {
//     posts = POSTS;// đổ dữ liệu POSTS tu mock-data vào biết posts

//     // lấy get all
//     getPosts(): Promise<any> {
//         return new Promise(resolve => {
//              resolve(this.posts);
//         });
//    }

//    // get Post theo Id
//    getPost(postId): Promise<any> {
//         let id = Number(postId);
//         return new Promise(resolve => {
//             const post = this.posts.find(post => post.id === id);
//             if (!post) {
//                  throw new HttpException('Post does not exist', 404)
//              }
//              resolve(post);
//         });
//    }

//    // thêm mới
//    addPost(post): Promise<any> {
//         return new Promise(resolve => {
//             this.posts.push(post);
//             resolve(this.posts);
//         });
//     }

//     deletePost(postId): Promise<any> {
//         let id = Number(postId);
//         return new Promise(resolve => {
//             let index = this.posts.findIndex(post => post.id === id);
//             if (index === -1) {
//                 throw new HttpException('Post does not exist', 404);
//             }
//             this.posts.splice(index, 1);
//             resolve(this.posts);
//         });
//     }

constructor( @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {


  }

  save(postDTO: PostDTO ): Promise <PostEntity>{
    return this.postsRepository.save(postDTO);
  }
}
