import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symptom } from '../interface/Symptom';

@Injectable({
  providedIn: 'root',
})
export class SymptomService {
  private apiServerUrl = environment.apiSymptom;

  constructor(private http: HttpClient) {}

  public getSymptoms(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(`${this.apiServerUrl}`);
  }
}
