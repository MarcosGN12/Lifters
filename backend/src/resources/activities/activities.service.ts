import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { Workout } from '../workouts/entities/workout.entity';
import { Exercise } from '../exercises/entities/exercise.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const existExerciseId = await this.exerciseRepository.findOneBy({ id: createActivityDto.exerciseId });

    if (!existExerciseId) {
      throw new NotFoundException('This exerciseId dont exist');
    }

    const existWorkoutId = await this.workoutRepository.findOneBy({ id: createActivityDto.workoutId });

    if (!existWorkoutId) {
      throw new NotFoundException('This workoutId dont exist');
    }

    const activity = this.createActivity(createActivityDto);
    return await this.activityRepository.save(activity);
  }

  async findAll(): Promise<Activity[]> {
    const activities = await this.activityRepository.find();

    if (activities.length == 0) {
      throw new NotFoundException('Activities not found');
    }

    return activities;
  }

  async findOne(id: number): Promise<Activity | null> {
    const activity = await this.activityRepository.findOneBy({ id });

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    return activity;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto): Promise<Activity> {
    const activity = await this.activityRepository.findOneBy({ id });

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    const existExerciseId = await this.exerciseRepository.findOneBy({ id: updateActivityDto.exerciseId });

    if (!existExerciseId) {
      throw new NotFoundException('This exerciseId dont exist');
    }

    if (updateActivityDto.sets) {
      activity.sets = updateActivityDto.sets;
    }

    if (updateActivityDto.reps) {
      activity.reps = updateActivityDto.reps;
    }

    if (updateActivityDto.weight) {
      activity.weight = updateActivityDto.weight;
    }

    if (updateActivityDto.results) {
      activity.results = updateActivityDto.results;
    }

    if (updateActivityDto.exerciseId) {
      activity.exerciseId = updateActivityDto.exerciseId;
    }

    return this.activityRepository.save(activity);
  }

  async remove(id: number): Promise<Activity> {
    const activity = await this.activityRepository.findOneBy({ id });

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    return this.activityRepository.remove(activity);
  }

  private createActivity(createActivityDto: CreateActivityDto): Activity {
    const activity = new Activity();
    activity.sets = createActivityDto.sets;
    activity.reps = createActivityDto.reps;
    activity.weight = createActivityDto.weight;
    activity.results = createActivityDto.results;
    activity.workoutId = createActivityDto.workoutId;
    activity.exerciseId = createActivityDto.exerciseId;

    return activity;
  }
}
