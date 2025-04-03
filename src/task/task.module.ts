import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../entities/tasks.model';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
