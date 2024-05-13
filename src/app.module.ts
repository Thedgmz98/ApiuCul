import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { TaskcategoriesModule } from './taskcategories/taskcategories.module';
import {Taskcategory} from './taskcategories/entities/taskcategory.entity';
import { TaskStatusModule } from './task_status/task_status.module';
import { TaskStatus } from './task_status/entities/task_status.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, Task,Taskcategory, TaskStatus],
    synchronize: true,
  }), UserModule, TaskModule, TaskcategoriesModule, TaskStatusModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}

