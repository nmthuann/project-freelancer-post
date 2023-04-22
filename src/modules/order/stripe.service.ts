// export class StripeService{
//     async charge(amount: number, cardToken: string): Promise<string> {
//     try {
//       const payment = await this.stripe.paymentIntents.create({
//         amount: amount * 100, // Stripe amount is in cents
//         currency: 'USD',
//         payment_method: cardToken,
//         confirm: true,
//       });

//       return payment.id;
//     } catch (err) {
//       throw new Error(`Payment failed: ${err.message}`);
//     }
//   }
// }