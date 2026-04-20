import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../../components/ui/button/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExercisesService } from '../../../../services/exercise.service';

@Component({
  selector: 'header-exercises',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent, ReactiveFormsModule],
  providers: [ExercisesService],
  templateUrl: './header-exercises.html',
})
export class HeaderExercise {
  isShow: boolean = true;

  newExerciseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    difficulty: new FormControl('easy'),
    intensity: new FormControl(1),
    userId: new FormControl(localStorage.getItem('userId')),
  });

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  exercisesService = inject(ExercisesService);

  async createNewExercise() {
    this.exercisesService.postUser(this.newExerciseForm.value).subscribe({
      next: (data) => {
        console.log(data);
        alert('exercise sucesfully created');
      },
      error: (e) => {
        console.log(e);
        alert('error: exercise not created');
      },
    });
    this.isShow = !this.isShow;
  }
}
