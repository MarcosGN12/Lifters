import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['name'])
export class CreateTrainingPlanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
