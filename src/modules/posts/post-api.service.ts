import { Inject, Injectable } from '@nestjs/common';
import { Client, ClientKafka, EventPattern, Transport } from '@nestjs/microservices';

import { PostDto } from './post-dto/post.dto';
import { GetUserNameDto } from './post-dto/get-useName.dto';
import { PostService } from './post.service';

@Injectable()
export class PostApiGatewayService {
 constructor(
  @Inject('AUTH_SERVICE')
   private readonly authClient: ClientKafka,
   private readonly postService: PostService,
   // private consumerService: ConsumerService,
   ) {}


  // @EventPattern('post_created') // put in middleware
  // async handlePostCreatedNew(data: any){
  //   this.postApiGatewayService.handleOrderCreated
  // }

  

  @EventPattern('post_created')
  handleOrderCreated(postDto: PostDto){
    this.authClient
    .send('get_freelancer_name', new GetUserNameDto(postDto.post_detail.profile_user))// emnail
    .subscribe(async (fullname)=>{ //if (fullname == 'Fail') 
      postDto.post_detail.profile_user = fullname;
      await this.postService.CreatePost(postDto);
    })

    // this.consumerService.consume(   
    //   groupId,
    //   {topic: topic},
    //   {
    //     eachMessage: async ({ message }) => {
    //       const input = JSON.parse(message.value.toString());
    //       console.log(input);
    //       const result = await this.accountUserService.getAccountUsers();
    //       console.log("send the result: ", result);
    //       await this.producerService.sendMessage('getUsers-res', result, 60000);
    //     }
    //   }
    // )
    
  }


  async onModuleInit() {
     this.authClient.subscribeToResponseOf('get_freelancer_name');
      await this.authClient.connect();  // test here
  }
}
