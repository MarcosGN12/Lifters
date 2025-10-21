import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { TrainingPlan } from 'src/resources/training-plans/entities/training-plan.entity';
import { Exercise } from 'src/resources/exercises/entities/exercise.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email?: string;
    trainingPlans?: TrainingPlan[];
    exercises?: Exercise[];
}
