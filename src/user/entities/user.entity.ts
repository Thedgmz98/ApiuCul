import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class User {

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    PhoneNumber: number;

    @Column()
    Email: string;

    @Column()
    Adrress: String;

    @Column({ default: true })
    isActive: boolean;
}
