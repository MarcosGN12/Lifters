import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainingPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
