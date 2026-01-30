import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'lifters-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon.html',
})
export class IconComponent {
  nameIcon = input.required<string>();
  classIcon = input.required<string>();
  sizeIcon = input.required<number>();
}
