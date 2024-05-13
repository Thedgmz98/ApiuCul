import { Task } from "src/task/entities/task.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()


export class TaskStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Task, task => task.status) 
    tasks: Task[];
}
