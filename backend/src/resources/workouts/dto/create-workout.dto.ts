import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorkoutDto {
  @IsDate()
  @IsNotEmpty()
  plannedAt: Date;

  @IsNumber()
  @IsNotEmpty()
  trainingPlanId: number;
}
