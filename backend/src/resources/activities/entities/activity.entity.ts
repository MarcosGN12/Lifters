import { Exercise } from 'src/resources/exercises/entities/exercise.entity';
import { Workout } from 'src/resources/workouts/entities/workout.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Workout, (workout) => workout.workouts)
  workout: Workout;

  @ManyToMany(() => Exercise, (exercise) => exercise.activity)
  exercise: Exercise;
}
