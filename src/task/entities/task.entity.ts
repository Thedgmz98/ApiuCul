import { User } from "src/user/entities/user.entity";
import { Taskcategory } from "src/taskcategories/entities/taskcategory.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "src/task_status/entities/task_status.entity";

@Entity()

export class Task {

    @ManyToOne(() => User, user => user.tasks) 
    user: User;

    @ManyToOne(() => Taskcategory, category => category.tasks) 
    category: Taskcategory;

    @ManyToOne(() => TaskStatus, status => status.tasks)
    status: TaskStatus;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_category_id: string;

    @Column()
    task_status_id: string;

    @Column()
    user_id: number; 

    @Column({ default: true })
    isActive: boolean;
    taskCategory: any;
    category: any;
}


