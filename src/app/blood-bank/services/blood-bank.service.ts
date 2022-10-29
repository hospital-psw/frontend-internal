import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from '../model/blood-bank.model';

@Injectable({
  providedIn: 'root',
})
export class BloodBankService {
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'api/BloodBank/all', {
      headers: this.headers,
    });
  }

  getBloodBank(id: number): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + 'api/BloodBank/' + id, {
      headers: this.headers,
    });
  }

  deleteBloodBank(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/BloodBank/' + id, {
      headers: this.headers,
    });
  }

  createBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodBank', bloodBank, {
      headers: this.headers,
    });
  }

  updateBloodBank(bloodBank: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/BloodBank/' + bloodBank.id,
      bloodBank,
      { headers: this.headers }
    );
  }
}