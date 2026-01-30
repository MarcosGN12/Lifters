import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../../ui/icon/icon';
import { BadgeComponent } from '../../ui/badge/badge';
import { ProgressBarComponent } from '../../ui/progress-bar/progress-bar';

@Component({
  selector: 'section-exercises',
  standalone: true,
  imports: [LucideAngularModule, IconComponent, BadgeComponent, ProgressBarComponent],
  templateUrl: './section-exercises.html',
})
export class SectionExercises {}
