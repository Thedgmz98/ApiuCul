import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()



export class Taskcategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_description: string;

    @OneToMany(() => Task, task => task.category)
    tasks: Task[];
  

}
