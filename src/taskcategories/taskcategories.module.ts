import { Module } from '@nestjs/common';
import { TaskcategoriesService } from './taskcategories.service';
import { TaskcategoriesController } from './taskcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taskcategory } from './entities/taskcategory.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Taskcategory])],
  controllers: [TaskcategoriesController],
  providers: [TaskcategoriesService],
})
export class TaskcategoriesModule {}
