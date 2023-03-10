import { Module } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//import { UserEntity } from 'src/modules/entities/entities/user.entity';
import { createConnection } from 'typeorm';


// const config: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: null,
//   database: 'freelancerproject-post',
//   entities: [UserEntity],
//   synchronize: true,
// };

// export default config;
//createConnection(config)
//   .then(() => console.log('Connected to the database'))
//   .catch((error) => console.log(`Failed to connect to the database: ${error}`));

//import { createConnection } from 'typeorm';
//import { UserEntity} from '../modules/entities/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'freelancerproject-post',
        entities: [],
        synchronize: true,
      }),
  },
];
