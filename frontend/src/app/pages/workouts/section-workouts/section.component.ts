import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from './workout-container/workout-container-component.js';

@Component({
  selector: 'section-workout-component',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent],
  templateUrl: './section.component.html',
})
export class SectionComponent {}
