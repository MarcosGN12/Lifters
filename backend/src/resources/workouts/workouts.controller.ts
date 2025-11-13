import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './entities/workout.entity';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutsService.create(createWorkoutDto);
  }

  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Workout | null> {
    return this.workoutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto): Promise<Workout> {
    return this.workoutsService.update(+id, updateWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Workout> {
    return this.workoutsService.remove(+id);
  }
}
