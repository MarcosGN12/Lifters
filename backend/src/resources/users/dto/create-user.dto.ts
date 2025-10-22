import { Exercise } from 'src/resources/exercises/entities/exercise.entity';
import { TrainingPlan } from 'src/resources/training-plans/entities/training-plan.entity';

export class CreateUserDto {
  email: string;
  trainingPlans: TrainingPlan[];
  exercises: Exercise[];
}
