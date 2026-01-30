import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../../ui/icon/icon';

@Component({
  selector: 'nav-exercises',
  standalone: true,
  imports: [LucideAngularModule, IconComponent],
  templateUrl: './nav-exercises.html',
})
export class NavExercises {}
