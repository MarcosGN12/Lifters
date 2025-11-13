import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(OmitType(CreateActivityDto, ['workoutId'] as const)) {}
