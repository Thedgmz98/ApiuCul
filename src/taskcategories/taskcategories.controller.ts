import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskcategoriesService } from './taskcategories.service';
import { CreateTaskcategoryDto } from './dto/create-taskcategory.dto';
import { UpdateTaskcategoryDto } from './dto/update-taskcategory.dto';

@Controller('taskcategories')
export class TaskcategoriesController {
  constructor(private readonly taskcategoriesService: TaskcategoriesService) {}

  @Post()
  create(@Body() createTaskcategoryDto: CreateTaskcategoryDto) {
    return this.taskcategoriesService.create(createTaskcategoryDto);
  }

  @Get()
  findAll() {
    return this.taskcategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskcategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskcategoryDto: UpdateTaskcategoryDto) {
    return this.taskcategoriesService.update(+id, updateTaskcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskcategoriesService.remove(+id);
  }
}
