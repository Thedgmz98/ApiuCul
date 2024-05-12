import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Task {
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
}


