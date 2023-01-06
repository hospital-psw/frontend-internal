import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  constructor(private _http: HttpClient) {}

  getQuantityOfBloodPerMonth(year: number, bloodType: number) {
    return this._http.get(
      `http://localhost:16177/api/Tender/blood/${year}/${bloodType}`
    );
  }
}
