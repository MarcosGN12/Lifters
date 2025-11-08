import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createTrainingPlanDto: CreateTrainingPlanDto): Promise<TrainingPlan> {
    const duplicatedName = await this.trainingPlanRepository.findOneBy({ name: createTrainingPlanDto.name });

    if (duplicatedName) {
      throw new ConflictException('This training plan is already created');
    }

    const trainingPlan = this.createTrainingPlan(createTrainingPlanDto);

    if (!trainingPlan.userId) {
      throw new BadRequestException('There is not any user assigned to this training plan');
    }

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

  async update(id: number, updateTrainingPlanDto: UpdateTrainingPlanDto): Promise<TrainingPlan> {
    const trainingPlan = await this.trainingPlanRepository.findOneBy({ id });

    if (!trainingPlan) {
      throw new NotFoundException('Training plan not found');
    }

    const duplicatedName = await this.trainingPlanRepository.findOneBy({ name: updateTrainingPlanDto.name });

    if (duplicatedName) {
      throw new ConflictException('Training plan already created');
    }

    if (updateTrainingPlanDto.name) {
      trainingPlan.name = updateTrainingPlanDto.name;
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

  private createTrainingPlan(createTrainingPlanDto: CreateTrainingPlanDto): TrainingPlan {
    const trainingPlan = new TrainingPlan();
    trainingPlan.name = createTrainingPlanDto.name;
    trainingPlan.userId = createTrainingPlanDto.userId;

    return trainingPlan;
  }
}
