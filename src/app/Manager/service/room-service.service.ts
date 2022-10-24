import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from '../Model/Room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  getRooms() {
    return this.http.get<IRoom[]>('http://localhost:16177/api/rooms/all')
  }
}
