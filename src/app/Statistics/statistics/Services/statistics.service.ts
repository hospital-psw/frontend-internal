import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private _http: HttpClient) {}

  getStatistics() {
    return this._http.get(`${environment.apiStatistics}/getStats`);
  }
}
