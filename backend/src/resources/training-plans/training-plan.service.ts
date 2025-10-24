import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrainingPlan } from './entities/training-plan.entity';

@Injectable()
export class TrainingPlanService {
  constructor(
    @InjectRepository(TrainingPlan)
    private trainingPlanRepository: Repository<TrainingPlan>,
  ) {}

  async create(
    createTrainingPlanDto: CreateTrainingPlanDto,
  ): Promise<TrainingPlan> {
    const duplicatedName = await this.trainingPlanRepository.findOneBy(
      createTrainingPlanDto,
    );

    if (duplicatedName) {
      throw new ConflictException('This training plan is already created');
    }

    const trainingPlan = new TrainingPlan();
    trainingPlan.name = createTrainingPlanDto.name;

    return await this.trainingPlanRepository.save(trainingPlan);
  }

  async findAll(): Promise<TrainingPlan[]> {
    const trainingPlans = await this.trainingPlanRepository.find();

    if (trainingPlans.length == 0) {
      throw new NotFoundException('Training plans not found');
    }

    return trainingPlans;
  }

  async findOne(id: number): Promise<TrainingPlan | null> {
    const trainingPlan = await this.trainingPlanRepository.findOneBy({ id });

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    return trainingPlan;
  }

  async update(
    id: number,
    updateTrainingPlanDto: UpdateTrainingPlanDto,
  ): Promise<TrainingPlan> {
    const trainingPlan = await this.trainingPlanRepository.findOneBy({ id });
    const duplicatedName = await this.trainingPlanRepository.findOneBy(
      updateTrainingPlanDto,
    );

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    if (duplicatedName) {
      throw new ConflictException('Training plan already created');
    }

    return this.trainingPlanRepository.save(trainingPlan);
  }

  async remove(id: number): Promise<TrainingPlan> {
    const trainingPlan = await this.trainingPlanRepository.findOneBy({ id });

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    return this.trainingPlanRepository.remove(trainingPlan);
  }
}
