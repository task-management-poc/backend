import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @Column({ type: DataType.ENUM('To Do', 'In Progress', 'Completed'), allowNull: false })
  status: string;

  @Column({ type: DataType.DATE, allowNull: false })
  due_date: Date;
}
