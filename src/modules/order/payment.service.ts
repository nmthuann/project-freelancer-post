// import { Injectable } from "@nestjs/common";
// import { PaymentDto, PaymentEntity } from "./payment.dto";
// import { OrderService } from "./order.service";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";
// import { OrderDto } from "./order.dto";
// import { OrderInProgressState } from "./order.state";
// import { StripeService } from "./stripe.service";

// @Injectable()
// export class PaymentService{
//     constructor(
//     @InjectRepository(PaymentEntity)
//     private readonly paymentRepository: Repository<PaymentEntity>,
//     private readonly orderService: OrderService,
//     private readonly orderState: OrderInProgressState,
//      private readonly stripeService: StripeService,
    
//   ) {}
    
//     async payment(inputs: PaymentDto){
//         const findOrder = await this.orderService.findById(inputs.id); // order đã được tạo
//         if (findOrder.status != 'Offer') return false
//         else{
//             const order="inProgess";
//             await this.orderState.changeState(order); 
//             // tính dealine
//             const resultPayment = new Promise<any>(async (resolve) =>{
//                 // xử lý vs qq j vs stripe
//                 const amount = 1;
//                 const cardToken = ''
//                 await this.stripeService.charge(amount, cardToken);
//                 await this.orderState.changeState("Complete");
//               resolve(true);
//             })

//             if (await resultPayment == true) return ;
//         }
//         return true;
//     }
// }