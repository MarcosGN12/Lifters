import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../../../../components/ui/icon/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginData } from '../../login';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';

@Component({
  selector: 'login-component-form',
  standalone: true,
  imports: [LucideAngularModule, IconComponent, ReactiveFormsModule],
  templateUrl: './login-component-form.html',
  providers: [ɵROUTER_PROVIDERS],
})
export class LoginComponentForm {
  router = inject(Router);

  @Output()
  login = new EventEmitter<LoginData>();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  showPassword: boolean = false;

  onLogin() {
    this.login.emit(this.loginForm.value);
    this.router.navigateByUrl('/');
  }

  onLogOut() {
    localStorage.removeItem('access_token');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
