import { User } from 'src/resources/users/entities/user.entity';
import { Workout } from 'src/resources/workouts/entities/workout.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TrainingPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.trainingPlans, {
    onDelete: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Workout, (workout) => workout.trainingPlan)
  workouts: Workout[];
}
