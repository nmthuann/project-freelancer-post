


import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from 'src/app/models/JobPost.entity';
import { PostEntity } from 'src/posts/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: null,
      database: 'freelancerproject-post',
      entities: ["src/app/models/*.entity{.ts,.js}"],
      migrations: [
        "src/data/mysql/migrations/*.ts",
        "dist/migrations/*{.ts,.js}"
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule{}