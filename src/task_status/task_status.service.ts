import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';
import { TaskStatus } from './entities/task_status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  taskStatusRepository: any;

  constructor(  @InjectRepository(TaskStatus)
  private taskstatusRepository: Repository<TaskStatus>,
) {}

  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskStatusRepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.taskstatusRepository.find();
  }

  findOne(id: number) {
    return this.taskstatusRepository.findOneBy({ id });
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return `This action updates a #${id} taskStatus`;
  }

  async remove(id: number) {
    await this.taskstatusRepository.delete(id);

  }
}
