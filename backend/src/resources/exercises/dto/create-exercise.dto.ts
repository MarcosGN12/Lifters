import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['name'])
export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
