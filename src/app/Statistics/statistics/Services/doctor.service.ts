import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl = 'http://localhost:16177/api/ApplicationDoctor';

  constructor(private _http: HttpClient) { }

  getDoctors() {
    return this._http.get(`http://localhost:16177/api/ApplicationDoctor/all`);
  }
}
