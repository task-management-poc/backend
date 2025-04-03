import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './tasks/task.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'task_db',
      autoLoadModels: true,
      synchronize: true, // Set to false in production
    }),
    TaskModule,
  ],
})
export class AppModule {}
