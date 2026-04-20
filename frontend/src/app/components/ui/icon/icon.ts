import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'lifters-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon.html',
})
export class IconComponent {
  name = input<string>();
  class = input<string>();
  size = input<number>();
}
