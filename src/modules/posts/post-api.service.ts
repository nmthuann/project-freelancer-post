// import { Inject, Injectable } from '@nestjs/common';
// import { Client, ClientKafka, Transport } from '@nestjs/microservices';

// import { PostDto } from './post-dto/post.dto';
// import { GetUserNameDto } from './post-dto/get-useName.dto';

// @Injectable()
// export class AppService {
//   constructor(@Inject('USER_SERVICE')
//    private readonly userClient: ClientKafka) {}

//   handleOrderCreated(postCreatedEvent: PostDto){
//     this.userClient
//     .send('get_user_name', new GetUserNameDto(postCreatedEvent.job_post_detail.profile_name))
//     .subscribe((user)=>{
//       console.log(`Ordering user with stripe ID ${user.stripeUserId} 
//       a price of $${postCreatedEvent.job_post_detail.packages[0].packageDetail.unit_price}`)
//     })
//   }
// }
