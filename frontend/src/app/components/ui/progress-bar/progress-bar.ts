import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'progress-bar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './progress-bar.html',
})
export class ProgressBarComponent {
  classProgress = input.required<string>();
  valueProgress = input.required<number>();
  maxProgress = input.required<number>();
  textProgress = input.required<string>();
}
