import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrainingPlan } from './entities/training-plan.entity';

@Injectable()
export class TrainingPlanService {
  constructor(
      @InjectRepository(TrainingPlan) private trainingPlanRepository: Repository<TrainingPlan>,
    ) {}

  create(createTrainingPlanDto: CreateTrainingPlanDto) {
    return 'This action adds a new trainingPlan';
  }

  findAll(): Promise<TrainingPlan[]> {
    return this.trainingPlanRepository.find();
  }

  findOne(id: number): Promise<TrainingPlan | null> {
    return this.trainingPlanRepository.findOneBy({ id });
  }

  update(id: number, updateTrainingPlanDto: UpdateTrainingPlanDto) {
    return `This action updates a #${id} trainingPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlan`;
  }
}
