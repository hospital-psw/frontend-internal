import { IConsiliumDisplay } from './../Model/ConsiliumDisplay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsiliumService {

  constructor(private http: HttpClient) { }

  getConsiliums(roomId: number):Observable<IConsiliumDisplay[]>{
    return this.http.get<IConsiliumDisplay[]>(`http://localhost:16177/api/consilium/room/${roomId}`);
  }
}
