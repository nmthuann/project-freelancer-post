import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
//import { ValidationPipe } from '@nestjs/common';
// app.use(new ValidationPipe()) // lỗi ở đây

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
        
  //       brokers: ['localhost:9092'],
  //     }
  //   }
  // });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  }
  
bootstrap();
