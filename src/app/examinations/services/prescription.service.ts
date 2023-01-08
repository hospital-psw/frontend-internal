import { Perscription } from './../interface/Perscription';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private apiServerUrl = environment.apiPerscription;

  constructor(private http: HttpClient) {}

  public getPerscriptions(): Observable<Perscription[]> {
    return this.http.get<Perscription[]>(`${this.apiServerUrl}`);
  }

  public searchPerscriptions(input: string): Observable<Perscription[]> {
    return this.http.get<Perscription[]>(`${this.apiServerUrl}/search`, {
      params: {
        input: input,
      },
    });
  }
}
