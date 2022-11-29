import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRelocationRequestDisplay } from '../Model/RelocationRequestDisplay';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}

  getRelocationRequests(roomId: number): Observable<IRelocationRequestDisplay[]> {
    return this.http.get<IRelocationRequestDisplay[]>(
      `http://localhost:16177/api/Relocation/${roomId}`
    );
  }


}