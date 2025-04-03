import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['To Do', 'In Progress', 'Completed'])
  status: string;

  @IsDate()
  due_date: Date;
}
