import { IConsiliumDisplay } from './../Model/ConsiliumDisplay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsiliumService {
  constructor(private http: HttpClient) {}

  getConsiliums(roomId: number): Observable<IConsiliumDisplay[]> {
    return this.http.get<IConsiliumDisplay[]>(
      `${environment.apiConsiliumUrl}/room/${roomId}`
    );
  }
}
