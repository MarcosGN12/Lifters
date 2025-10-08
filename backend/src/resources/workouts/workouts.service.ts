import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout) private workRepository: Repository<Workout>,
  ) {}

  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  findAll(): Promise<Workout[]>{
    return this.workRepository.find();
  }

  findOne(id: number): Promise<Workout | null> {
    return this.workRepository.findOneBy({ id });
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
