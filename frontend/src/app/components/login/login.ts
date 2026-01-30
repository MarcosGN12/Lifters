import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconComponent } from '../ui/icon/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { form } from '@angular/forms/signals';
import { ButtonComponent } from '../ui/button/button';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [LucideAngularModule, IconComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.html',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    const formValue = this.loginForm.value;
    this.http.post('http://localhost:3000/auth/login', formValue).subscribe({
      next: (response: any) => {
        if (response.accessToken) {
          localStorage.setItem('access_token', response.accessToken);
          this.router.navigateByUrl('/');
        } else {
          alert(response.message);
          console.log(response.result);
        }
      },
      error: (error) => {
        alert(error.statusText);
      },
    });
  }

  onLogOut() {
    localStorage.removeItem('access_token');
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
