import { Injectable, OnModuleInit } from '@nestjs/common';
import { ProducerService } from '../../kafka/producer.service';
import { ConsumerService } from '../../kafka/consumer.service';
import { PostService } from '../post.service';

@Injectable()
export class PostOrderService implements OnModuleInit {
  constructor(
    private readonly producerService: ProducerService,
    private readonly consumerService: ConsumerService,
    private readonly postService: PostService,
  ) {}

  async handleOrderServiceMessage(groupId: string, topic: string) {
    this.consumerService.consume(
      groupId,
      { topic: topic },
      {
        eachMessage: async ({ message }) => {
          const input = JSON.parse(message.value.toString());
          const result = await this.postService.getPostForOrder();
          console.log('send the result: ', result, 'input', input);
          await this.producerService.sendMessage(
            'get-post-infor-res',
            result,
            6000,
          );
        },
      },
    );
  }

  async onModuleInit() {
    await this.handleOrderServiceMessage('order-service', 'get-post-infor');
  }
}
