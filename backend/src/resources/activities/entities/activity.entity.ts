import { Exercise } from 'src/resources/exercises/entities/exercise.entity';
import { Workout } from 'src/resources/workouts/entities/workout.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  workoutId: number;

  @Column()
  exerciseId: number;

  @Column('int', { array: true })
  results: number[];

  @ManyToOne(() => Workout, (workout) => workout.activity, {
    onDelete: 'CASCADE',
  })
  workout: Workout;

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercise: Exercise[];
}
