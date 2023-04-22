// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { OrderDto } from './order.dto';
// import { OrderEntity } from './order.entity';

// import { IOrderService } from './Ioder.service';
// import { OrderCancelState } from '../state/OrderCancelState';
// import { OrderCompleteState } from '../state/OrderCompleteState';
// import { OrderInProgressState } from '../state/OrderInProgressState';
// import { OrderOfferState } from '../state/OrderOfferState';
// // import { HistoryOrder } from '../model/history-order.entity/history-order.entity';
// // import HistoryOrderDTO from '../DTO/historyOrder.dto';

// @Injectable()
// export class OrderService implements IOrderService {
//   constructor(
//     @InjectRepository(OrderEntity)
//     private orderRepository: Repository<OrderEntity>,
//     private orderOfferState: OrderOfferState,
//   ) {}
//   getAll(): Promise<OrderEntity[]> {
//     return this.orderRepository.find();
//   }
//     async getOrderById(id: number): Promise<OrderEntity> {
//         const order = await this.orderRepository.findOneBy({ id });
//         return order
//     }

//   async findById(id: number): Promise<OrderEntity> {
//     const order = await this.orderRepository.findOneBy({ id });
//     if (!order) {
//       throw new NotFoundException(`Order with id ${id} not found`);
//     }
//     switch (order.status) {
//       case 'Offer':
//         order.setState(this.orderOfferState);
//         break;
//       case 'Completed':
//         order.setState(new OrderCompleteState());
//         break;
//       case 'Cancel':
//         order.setState(new OrderCancelState());
//         break;
//       case 'Inprogress':
//         order.setState(new OrderInProgressState());
//         break;
//     }
//     return order;
//   }
//   async createOrder(order: OrderDto): Promise<OrderEntity> {
//     const newOrder = this.orderRepository.create(order);

//     return this.orderRepository.save(newOrder);
//   }
//   async confirm(id: number): Promise<OrderEntity> {
//     const order = await this.findById(id);
//     console.log(order.status);
//     order.confirm();
//     this.orderRepository.save(order);
//     return order;
//   }
//   async cancel(id: number): Promise<Order> {
//     const order = await this.findById(id);
//     order.cancel();
//     await this.orderRepository.save(order);
//     return order;
//   }

//   async delete(id: number): Promise<void> {
//     const order = await this.findById(id);
//     this.orderRepository.save(order);
//   }

//   async checkPermission(id: number, orderId: number): Promise<Boolean> {
//     const order = this.findById(id);
//     return (await order).checkPermission(id);
//   }

//     async updateStatus(id: number, order: OrderDto): Promise<OrderEntity> {
//         return await this.orderRepository.save(order);
//   }
// }