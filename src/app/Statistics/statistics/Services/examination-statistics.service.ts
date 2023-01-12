import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExaminationStatisticsService {
  private apiUrl = environment.apiStatistics;

  constructor(private http: HttpClient) {}

  getSymptomStats() {
    return this.http.get(`${this.apiUrl}/examination/symptom-count`);
  }

  getAverageSteps() {
    return this.http.get(`${this.apiUrl}/examinaton/average-steps`);
  }

  getAverageBackSteps() {
    return this.http.get(`${this.apiUrl}/examination/average-back-steps`);
  }

  getAveragePrescriptions() {
    return this.http.get(`${this.apiUrl}/examination/average-prescriptions`);
  }

  getAverageDuration() {
    return this.http.get(`${this.apiUrl}/examination/average-duration`);
  }

  getAverageSpecializationDuration() {
    return this.http.get(
      `${this.apiUrl}/examination/specialization/average-duration`
    );
  }
}
