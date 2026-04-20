import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type ColorProgress = 'progress-info' | 'progress-warning' | 'progress-error';

@Component({
  selector: 'progress-bar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './progress-bar.html',
})
export class ProgressBarComponent {
  color = input<ColorProgress>();
  valueProgress = input<number>();
  maxProgress = input<number>();

  class = computed(() => `progress ${this.color()}`);
}
