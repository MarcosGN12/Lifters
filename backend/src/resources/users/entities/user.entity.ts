import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { TrainingPlan } from '../../training-plans/entities/training-plan.entity';
import { Exercise } from '../../exercises/entities/exercise.entity';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(() => TrainingPlan, (trainingPlan) => trainingPlan.user)
  trainingPlans: TrainingPlan[];

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises: Exercise[];
}
