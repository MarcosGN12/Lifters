import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['name'])
export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  difficulty: string;

  @IsNumber()
  @IsNotEmpty()
  intensity: number;

  @IsDate()
  @IsNotEmpty()
  createdDate: Date;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
