


import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/posts/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: null,
      database: 'freelancerproject',
      entities: [PostEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaesModule{}