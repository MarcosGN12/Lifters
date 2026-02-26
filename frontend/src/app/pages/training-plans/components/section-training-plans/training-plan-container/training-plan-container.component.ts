import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../../../../../components/ui/icon/icon';
import { BadgeComponent } from '../../../../../components/ui/badge/badge';
import { ProgressBarComponent } from '../../../../../components/ui/progress-bar/progress-bar';
import { ButtonComponent } from '../../../../../components/ui/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'training-plan-container-component',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    IconComponent,
    BadgeComponent,
    ProgressBarComponent,
    ButtonComponent,
  ],
  templateUrl: './training-plan-container.component.html',
})
export class ContainerComponent {
  color = input<string>('green-400');

  bgColor = computed(() => `bg-${this.color()}`);
}
