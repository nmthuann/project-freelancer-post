import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('post'); // tiền tố api
  //app.useGlobalPipes(new ValidationPipe());
  console.log('Post Server connect successfully .......  !!!');
  await app.listen(8089, () => console.log('http://localhost:8089'));
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     AppModule,
//     {
//       transport: Transport.KAFKA,
//       options: {
//         client: {
//           brokers: ['localhost:9092'],
//         },
//         consumer: {
//           groupId: 'post-consumer',
//         },
//       },
//     },
//   );
//   await app.listen();
// }
// bootstrap();
