import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ExercisesComponent } from '../../components/exercises/exercises-component';

@Component({
  selector: 'exercises',
  imports: [LucideAngularModule, ExercisesComponent],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercises {
  createExercise() {
    let exerciseName = window.prompt('Write exercise name');

    if (exerciseName) {
      const exerciseContainer = document.getElementById('exerciseContainer');

      const newDiv = document.createElement('div');
      newDiv.innerHTML = exerciseName;

      newDiv.className =
        'flex justify-center items-center w-50 h-50 m-10 rounded-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer transition';
      exerciseContainer?.appendChild(newDiv);
    } else {
      alert('No exercise name provided');
    }
  }
}
