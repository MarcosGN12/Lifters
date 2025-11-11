import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrainingPlan } from '../../training-plans/entities/training-plan.entity';
import { Activity } from '../../activities/entities/activity.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plannedAt: Date;

  @Column()
  trainingPlanId: number;

  @ManyToOne(() => TrainingPlan, (trainingPlan) => trainingPlan.workouts, {
    onDelete: 'CASCADE',
  })
  trainingPlan: TrainingPlan;

  @OneToMany(() => Activity, (activity) => activity.workout)
  activity: Activity[];
}
