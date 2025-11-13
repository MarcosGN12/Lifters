import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(OmitType(CreateExerciseDto, ['userId'] as const)) {}
