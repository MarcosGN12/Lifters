import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = this.createActivity(createActivityDto);

    if (!activity.workoutId) {
      throw new BadRequestException('There is not any workout assigned to this activity');
    }

    if (!activity.exerciseId) {
      throw new BadRequestException('There is not any exercise assigned to this activity');
    }

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

    if (updateActivityDto.sets) {
      activity.sets = updateActivityDto.sets;
    }

    if (updateActivityDto.reps) {
      activity.reps = updateActivityDto.reps;
    }

    if (updateActivityDto.weight) {
      activity.weight = updateActivityDto.weight;
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
