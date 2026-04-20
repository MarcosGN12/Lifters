import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from './training-plan-container/training-plan-container-component';

@Component({
  selector: 'section-training-plan-component',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent],
  templateUrl: './section.component.html',
})
export class SectionComponent {}
