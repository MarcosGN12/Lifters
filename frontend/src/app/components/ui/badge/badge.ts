import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'lifters-badge',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './badge.html',
})
export class BadgeComponent {
  color = input.required<string>();
}
