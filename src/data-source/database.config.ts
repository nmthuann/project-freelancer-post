import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UserEntity } from 'src/modules/entities/entities/user.entity';


@Module({
  imports:[
    TypeOrmModule.forRoot(
    {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'freelancerproject-post',
        entities: [],
        synchronize: true,})],
})
export class DataBaseModule {}
