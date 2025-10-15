import { Activity } from 'src/resources/activities/entities/activity.entity';
import { User } from 'src/resources/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.exercises)
  user: User;

  @ManyToMany(() => Activity, (activity) => activity.exercise)
  @JoinTable()
  activity: Activity;
}
