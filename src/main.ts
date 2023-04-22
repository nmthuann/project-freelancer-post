import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('here')
  await app.listen(3000, () => (console.log(':localhost:3000')));
  }
  
bootstrap();




