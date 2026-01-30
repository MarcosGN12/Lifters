import { Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'lifters-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './button.html',
})
export class ButtonComponent {
  classButton = input.required<string>();
  textButton = input.required<string>();
}
