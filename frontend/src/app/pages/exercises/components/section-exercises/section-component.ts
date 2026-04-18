import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerTbodyComponent } from './exercise-container/tbody/section-container-component';
import { ContainerTheadComponent } from './exercise-container/thead/section-container-component';

@Component({
  selector: 'section-exercises',
  standalone: true,
  imports: [LucideAngularModule, ContainerTbodyComponent, ContainerTheadComponent],
  templateUrl: './section.component.html',
})
export class SectionExercises {}
