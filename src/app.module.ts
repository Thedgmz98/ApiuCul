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
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, Task,Taskcategory],
    synchronize: true,
  }), UserModule, TaskModule, TaskcategoriesModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}

