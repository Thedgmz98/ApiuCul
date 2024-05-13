import { Injectable } from '@nestjs/common';
import { CreateTaskcategoryDto } from './dto/create-taskcategory.dto';
import { UpdateTaskcategoryDto } from './dto/update-taskcategory.dto';
import { Taskcategory } from './entities/taskcategory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskcategoriesService {

  constructor(  @InjectRepository(Taskcategory)
  private taskcategoryRepository: Repository<Taskcategory>,
) {}


  create(createTaskcategoryDto: CreateTaskcategoryDto) {
    return this.taskcategoryRepository.save(createTaskcategoryDto);
  }

  findAll() {
    return this.taskcategoryRepository.find();
  }

  findOne(id: number) {
    return this.taskcategoryRepository.findOneBy({ id });
  }

  update(id: number, updateTaskcategoryDto: UpdateTaskcategoryDto) {
    return `This action updates a #${id} taskcategory`;
  }

  async remove(id: number) {
    await this.taskcategoryRepository.delete(id);
    
  }
}
