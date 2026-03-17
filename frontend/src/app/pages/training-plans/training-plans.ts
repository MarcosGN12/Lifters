import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header-training-plans/header-component';
import { SectionComponent } from './components/section-training-plans/section.component';
import { FooterComponent } from './components/footer-training-plans/footer.component';

@Component({
  selector: 'training-plans',
  imports: [HeaderComponent, SectionComponent, FooterComponent],
  templateUrl: './training-plans.html',
  styleUrl: './training-plans.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPlans {}
