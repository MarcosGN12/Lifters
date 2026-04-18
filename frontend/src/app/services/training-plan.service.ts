import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TrainingPlan } from '../types/trainingPlans.type';

@Injectable({
  providedIn: 'root',
})
export class TrainingPlansService {
  private url: string = 'http://localhost:3000/training-plans';
  http = inject(HttpClient);

  postTrainingPlan(trainingPlan: TrainingPlan) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<TrainingPlan>(this.url, trainingPlan, { headers });
  }
}
