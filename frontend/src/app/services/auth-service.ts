import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(item: LoginData) {
    this.http.post('http://localhost:3000/auth/login', item).subscribe({
      next: (response: any) => {
        if (response.accessToken) {
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('userId', response.userId);
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
}
