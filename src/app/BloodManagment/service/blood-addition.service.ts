import { Injectable } from '@angular/core';
import { BloodAddition } from '../interface/BloodAddition';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BloodAdditionService {
  constructor(private http: HttpClient) {}

  public GetByBloodType(bt: string): Observable<BloodAddition[]> {
    return this.http.get<BloodAddition[]>(
      environment.apiBloodAddition + bt
    );
  }
}
