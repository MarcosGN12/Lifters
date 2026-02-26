import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../../components/ui/button/button';

@Component({
  selector: 'header-exercises',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent],
  templateUrl: './header-exercises.html',
})
export class HeaderExercise {}
