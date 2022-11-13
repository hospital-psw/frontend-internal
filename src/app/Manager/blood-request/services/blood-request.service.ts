import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodRequest } from '../interface/blood-request';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {
  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}
}
