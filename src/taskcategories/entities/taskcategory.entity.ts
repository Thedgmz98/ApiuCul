import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()



export class Taskcategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_description: string;


}
