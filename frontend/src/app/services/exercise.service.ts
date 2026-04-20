import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Exercise } from '../types/exercises.type';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private url: string = 'http://localhost:3000/exercises';
  http = inject(HttpClient);

  postUser(exercise: Exercise) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<Exercise>(this.url, exercise, { headers });
  }
}
