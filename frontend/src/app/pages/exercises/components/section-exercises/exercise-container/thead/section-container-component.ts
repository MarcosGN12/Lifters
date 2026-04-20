import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'exercise-thead-container-component',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './section-container.component.html',
})
export class ContainerTheadComponent {}
