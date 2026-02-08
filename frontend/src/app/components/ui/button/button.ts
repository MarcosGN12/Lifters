import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type BtnVariant = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-info';

@Component({
  selector: 'lifters-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './button.html',
})
export class ButtonComponent {
  variant = input<BtnVariant>();

  class = computed(() => `btn ${this.variant()}`);
}
