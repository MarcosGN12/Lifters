import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeaderExercise } from './header-exercises/header-exercises';
import { SectionExercises } from './section-exercises/section.exercises';

@Component({
  selector: 'exercises-component',
  standalone: true,
  imports: [LucideAngularModule, HeaderExercise, SectionExercises],
  templateUrl: './exercises-component.html',
})
export class ExercisesComponent {}
