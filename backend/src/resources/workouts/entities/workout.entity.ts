import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weekNumber: number;
}
