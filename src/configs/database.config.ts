import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: null,
  database: 'freelancerproject-post',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export default config;
