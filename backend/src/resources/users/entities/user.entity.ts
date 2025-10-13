import { Exercise } from 'src/resources/exercises/entities/exercise.entity';
import { TrainingPlan } from 'src/resources/training-plans/entities/training-plan.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(() => TrainingPlan, (trainingPlan) => trainingPlan.user)
  trainingPlans: TrainingPlan[];

  @OneToMany(() => Exercise, (exercise) => exercise.user) 
  exercises: Exercise[]
}
