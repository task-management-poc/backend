import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from '../entities/tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(createTaskDto);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    return task.update(updateTaskDto);
  }

  async delete(id: number): Promise<void> {
    const task = await this.findOne(id);
    await task.destroy();
  }
}
