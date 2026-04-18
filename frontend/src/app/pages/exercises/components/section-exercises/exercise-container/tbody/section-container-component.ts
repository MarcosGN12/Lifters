import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../../../../../../components/ui/icon/icon';
import { BadgeComponent } from '../../../../../../components/ui/badge/badge';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../../../../../components/ui/progress-bar/progress-bar';

@Component({
  selector: 'exercise-tbody-container-component',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, IconComponent, BadgeComponent, ProgressBarComponent],
  templateUrl: './section-container-component.html',
})
export class ContainerTbodyComponent {
  name = input.required<string>();
  category = input.required<string>();
  difficulty = input.required<string>();
  currentIntensity = input.required<number>();
  maxIntensity = input.required<number>();
  date = input<string>();

  color = input<string>('green-400');
  bgColor = computed(() => `bg-${this.color()}`);
}
