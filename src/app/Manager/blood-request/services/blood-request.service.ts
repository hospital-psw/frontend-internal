import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodRequest } from '../interface/blood-request';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getBloodRequest(): Observable<BloodRequest[]>{
    return this.http.get<BloodRequest[]>(
      this.apiHost + 'pending',
      {headers: this.headers}
    );
  }

  getAccepted(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(
      this.apiHost + 'api/BloodAcquisition/get/all/accepted',
      { headers: this.headers }
    );
  }

  getDeclined(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(
      this.apiHost + 'api/BloodAcquisition/get/all/declined',
      { headers: this.headers }
    );
  }

  MakeAccepted(id: number): Observable<BloodRequest> {
    return this.http.put<BloodRequest>(
      this.apiHost + 'accept/' + id,
      { headers: this.headers }
    );
  }

  MakeDeclined(id: number): Observable<BloodRequest> {
    return this.http.put<BloodRequest>(
      this.apiHost + 'decline/' + id,
      { headers: this.headers }
    );
  }

}
