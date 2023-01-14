import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  constructor(private _http: HttpClient) {}

  getQuantityOfBloodPerMonth(year: number, bloodType: number) {
    return this._http.get(
      `${environment.apiTenderHospital}/blood/${year}/${bloodType}`
    );
  }
}
