import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutsService {
  constructor(@InjectRepository(Workout) private workRepository: Repository<Workout>) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const workout = this.createWorkout(createWorkoutDto);

    if (!workout.trainingPlanId) {
      throw new BadRequestException('There is not any training plan assigned to this workout');
    }

    return await this.workRepository.save(workout);
  }

  async findAll(): Promise<Workout[]> {
    const workouts = await this.workRepository.find();

    if (workouts.length == 0) {
      throw new NotFoundException('Workouts not found');
    }

    return workouts;
  }

  async findOne(id: number): Promise<Workout | null> {
    const workout = await this.workRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return workout;
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto): Promise<Workout> {
    const workout = await this.workRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (updateWorkoutDto.plannedAt) {
      workout.plannedAt = updateWorkoutDto.plannedAt;
    }

    return this.workRepository.save(workout);
  }

  async remove(id: number): Promise<Workout> {
    const workout = await this.workRepository.findOneBy({ id });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return this.workRepository.remove(workout);
  }

  private createWorkout(createWorkoutDto: CreateWorkoutDto): Workout {
    const workout = new Workout();
    workout.trainingPlanId = createWorkoutDto.trainingPlanId;
    workout.plannedAt = createWorkoutDto.plannedAt;

    return workout;
  }
}
