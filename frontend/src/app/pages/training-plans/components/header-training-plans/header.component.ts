import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../../../app/components/ui/button/button';

@Component({
  selector: 'header-training-plan-component',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
