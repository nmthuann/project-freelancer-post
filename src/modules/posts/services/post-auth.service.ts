import { Inject, Injectable } from '@nestjs/common';
import { ProducerService } from '../../kafka/producer.service';
import { ConsumerService } from '../../kafka/consumer.service';


@Injectable()
export class PostAuthService {
 constructor(
    private producerService: ProducerService,
    private consumerService: ConsumerService 
  ) {}


  async handleAuthServiceMessage(email: string){
    await this.producerService.sendMessage('get-freelancer-name', email, 6000);
    //await this.consumerService.
    const name = await this.consumerService.handleMessage<any>('post-service', 'get-freelancer-name-res');
    console.log("name: ",name)
    return name;
  }

 
}





 // @EventPattern('post_created') // put in middleware
  // async handlePostCreatedNew(data: any){
  //   this.postApiGatewayService.handleOrderCreated
  // }

  // @EventPattern('post_created')
  // handleOrderCreated(postDto: PostDto){
  //   this.authClient
  //   .send('get_freelancer_name', new GetUserNameDto(postDto.post_detail.profile_user))// emnail
  //   .subscribe(async (fullname)=>{ //if (fullname == 'Fail') 
  //     postDto.post_detail.profile_user = fullname;
  //     await this.postService.CreatePost(postDto);
  //   })

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
    
  // }


  // async onModuleInit() {
  //    this.authClient.subscribeToResponseOf('get_freelancer_name');
  //     await this.authClient.connect();  // test here
  // }