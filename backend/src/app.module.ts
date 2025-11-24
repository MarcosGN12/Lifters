import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { TrainingPlanModule } from './resources/training-plans/training-plan.module';
import { WorkoutsModule } from './resources/workouts/workouts.module';
import { ActivitiesModule } from './resources/activities/activities.module';
import { ExercisesModule } from './resources/exercises/exercises.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './resources/users/entities/user.entity';
import { Workout } from './resources/workouts/entities/workout.entity';
import { TrainingPlan } from './resources/training-plans/entities/training-plan.entity';
import { Activity } from './resources/activities/entities/activity.entity';
import { Exercise } from './resources/exercises/entities/exercise.entity';
import { AuthModule } from './resources/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.develop.env',
    }),
    UsersModule,
    AuthModule,
    TrainingPlanModule,
    WorkoutsModule,
    ActivitiesModule,
    ExercisesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5439,
      username: 'postgres',
      password: 'postgres',
      database: 'lifters-dev',
      entities: [User, TrainingPlan, Workout, Activity, Exercise],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
