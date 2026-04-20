import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header-training-plans/header-component';
import { SectionComponent } from './section-workouts/section.component';
import { FooterComponent } from './footer-training-plans/footer.component-';

@Component({
  selector: 'workouts',
  imports: [HeaderComponent, SectionComponent, FooterComponent],
  templateUrl: './workouts.html',
  styleUrl: './workouts.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Workouts {}
