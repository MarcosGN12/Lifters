import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { LucideAngularModule } from 'lucide-angular';
import { LoginComponent } from '../../components/login/login';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  standalone: true,
  selector: 'login',
  imports: [LucideAngularModule, LoginComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel);

  sendData() {
    this.loginModel.set({
      email: '',
      password: '',
    });
  }

  seePassword() {
    const input = document.getElementById('password') as HTMLInputElement;

    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
}
