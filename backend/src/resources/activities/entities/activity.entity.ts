import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sets: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @Column('int', { array: true })
  results: number[];
}
