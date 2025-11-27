import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrainingPlan } from '../../training-plans/entities/training-plan.entity';
import { Exercise } from '../../exercises/entities/exercise.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash?: string;

  @OneToMany(() => TrainingPlan, (trainingPlan) => trainingPlan.user)
  trainingPlans: TrainingPlan[];

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises: Exercise[];
}
