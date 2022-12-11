import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPatient } from '../interface/ipatient';

@Injectable({
  providedIn: 'root',
})
export class BlockserviceService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getBlocked(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(
      `${environment.apiApplicationPatient}/blocked`
    );
  }
  getMalicious(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(
      `${environment.apiApplicationPatient}/malicious`
    );
  }
  blockPatient(id: number): Observable<IPatient> {
    return this.http.put<IPatient>(
      this.apiHost + 'api/ApplicationPatient/block/' + id,
      { headers: this.headers }
    );
  }
  unblockPatient(id: number): Observable<IPatient> {
    return this.http.put<IPatient>(
      this.apiHost + 'api/ApplicationPatient/unblock/' + id,
      { headers: this.headers }
    );
  }
}
