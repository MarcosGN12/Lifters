import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateActivityDto {
  @IsNumber()
  @IsNotEmpty()
  sets: number;

  @IsNumber()
  @IsNotEmpty()
  reps: number;

  @IsNumber()
  weight: number;

  results: number[];

  @IsNumber()
  @IsNotEmpty()
  workoutId: number;

  @IsNumber()
  @IsNotEmpty()
  exerciseId: number;
}
