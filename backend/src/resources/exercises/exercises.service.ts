import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const duplicatedName = await this.exerciseRepository.findOneBy({ name: createExerciseDto.name });

    if (duplicatedName) {
      throw new ConflictException('This exercise is already created for this user');
    }

    const exercise = this.createExercise(createExerciseDto);

    if (!exercise.userId) {
      throw new BadRequestException('There is not any user assigned to this exercise');
    }

    return await this.exerciseRepository.save(exercise);
  }

  async findAll(): Promise<Exercise[]> {
    const exercises = await this.exerciseRepository.find();

    if (exercises.length == 0) {
      throw new NotFoundException('Exercises not found');
    }

    return exercises;
  }

  async findOne(id: number): Promise<Exercise | null> {
    const exercise = await this.exerciseRepository.findOneBy({ id });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return exercise;
  }

  async update(id: number, updateExerciseDto: UpdateExerciseDto): Promise<Exercise> {
    const exercise = await this.exerciseRepository.findOneBy({ id });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    const duplicatedName = await this.exerciseRepository.findOneBy({ name: updateExerciseDto.name });

    if (duplicatedName) {
      throw new ConflictException('Exercise already created');
    }

    if (updateExerciseDto.name) {
      exercise.name = updateExerciseDto.name;
    }

    return this.exerciseRepository.save(exercise);
  }

  async remove(id: number): Promise<Exercise> {
    const exercise = await this.exerciseRepository.findOneBy({ id });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return this.exerciseRepository.remove(exercise);
  }

  private createExercise(createExerciseDto: CreateExerciseDto): Exercise {
    const exercise = new Exercise();
    exercise.name = createExerciseDto.name;
    exercise.userId = createExerciseDto.userId;

    return exercise;
  }
}
