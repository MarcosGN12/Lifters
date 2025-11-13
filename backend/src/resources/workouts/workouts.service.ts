import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { TrainingPlan } from '../training-plans/entities/training-plan.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    @InjectRepository(TrainingPlan)
    private trainingPlanRepository: Repository<TrainingPlan>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const existTrainingPlanId = await this.trainingPlanRepository.findOneBy({ id: createWorkoutDto.trainingPlanId });

    if (!existTrainingPlanId) {
      throw new NotFoundException('This trainingPlanId dont exist');
    }

    const workout = this.createWorkout(createWorkoutDto);

    return await this.workoutRepository.save(workout);
  }

  async findAll(): Promise<Workout[]> {
    const workouts = await this.workoutRepository.find();

    if (workouts.length == 0) {
      throw new NotFoundException('Workouts not found');
    }

    return workouts;
  }

  async findOne(id: number): Promise<Workout | null> {
    const workout = await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return workout;
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto): Promise<Workout> {
    const workout = await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (updateWorkoutDto.plannedAt) {
      workout.plannedAt = updateWorkoutDto.plannedAt;
    }

    return this.workoutRepository.save(workout);
  }

  async remove(id: number): Promise<Workout> {
    const workout = await this.workoutRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return this.workoutRepository.remove(workout);
  }

  private createWorkout(createWorkoutDto: CreateWorkoutDto): Workout {
    const workout = new Workout();
    workout.trainingPlanId = createWorkoutDto.trainingPlanId;
    workout.plannedAt = createWorkoutDto.plannedAt;

    return workout;
  }
}
