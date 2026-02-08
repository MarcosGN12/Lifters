import { Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type BadgeColor = 'badge-primary' | 'badge-info' | 'badge-warning' | 'badge-error';
type BadgeDecoration = 'badge-soft' | 'badge-outline';

@Component({
  selector: 'lifters-badge',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './badge.html',
})
export class BadgeComponent {
  color = input<BadgeColor>();
  decoration = input<BadgeDecoration>();

  class = computed(() => `badge ${this.color()} ${this.decoration()}`);
}
