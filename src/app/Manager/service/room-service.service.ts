import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from '../Model/Room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<[]>('http://localhost:16177/api/map/all');
  }
}
