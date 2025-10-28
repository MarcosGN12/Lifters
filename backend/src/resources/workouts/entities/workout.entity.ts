import { Activity } from 'src/resources/activities/entities/activity.entity';
import { TrainingPlan } from 'src/resources/training-plans/entities/training-plan.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weekNumber: number;

  @Column()
  trainingPlanId: number;

  @ManyToOne(() => TrainingPlan, (trainingPlan) => trainingPlan.workouts, {
    onDelete: 'CASCADE',
  })
  trainingPlan: TrainingPlan;

  @OneToMany(() => Activity, (activity) => activity.workout)
  activity: Activity[];
}
