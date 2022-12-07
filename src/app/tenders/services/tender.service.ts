import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITender } from '../model/tender.model';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<ITender[]> {
    return this.http.get<ITender[]>(`http://localhost:45488/api/Tender/all`);
  }
}
