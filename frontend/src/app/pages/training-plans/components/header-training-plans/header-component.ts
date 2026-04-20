import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../../components/ui/button/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TrainingPlansService } from '../../../../services/training-plan.service';

@Component({
  selector: 'header-training-plan-component',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isShow: boolean = true;

  newTrainingPlanForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    userId: new FormControl(localStorage.getItem('userId')),
  });

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  trainingPlanService = inject(TrainingPlansService);

  async createNewExercise() {
    this.trainingPlanService.postTrainingPlan(this.newTrainingPlanForm.value).subscribe({
      next: (data) => {
        console.log(data);
        alert('trainingPlan sucesfully created');
      },
      error: (e) => {
        console.log(e);
        alert('error: trainingPlan not created');
      },
    });
    this.isShow = !this.isShow;
  }
}
