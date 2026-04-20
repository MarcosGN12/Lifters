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
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurationApp from '../config/configuration-app';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/.${process.env.NODE_ENV}.env`,
      load: [configurationApp],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    TrainingPlanModule,
    WorkoutsModule,
    ActivitiesModule,
    ExercisesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: Number(configService.get('DB_PORT')),
        username: 'postgres',
        password: 'postgres',
        database: configService.get('DB_NAME'),
        entities: [User, TrainingPlan, Workout, Activity, Exercise],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
