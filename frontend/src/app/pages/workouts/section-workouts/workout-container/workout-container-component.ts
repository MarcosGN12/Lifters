import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../components/ui/icon/icon';
import { ButtonComponent } from '../../../../components/ui/button/button';

@Component({
  selector: 'workout-container-component',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, IconComponent, ButtonComponent],
  templateUrl: './workout-container.component.html',
})
export class ContainerComponent {
  name = input.required<string>();
  description = input.required<string>();

  color = input<string>('green-400');

  bgColor = computed(() => `bg-${this.color()}`);
}
