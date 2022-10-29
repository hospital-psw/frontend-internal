import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from '../Model/Room';
import { IBuilding } from '../Model/Building';
import { IRoomMap } from '../Model/RoomMap';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms(building: string, floor: string) {
    return this.http.get<IRoomMap[]>(`http://localhost:16177/api/map/getFloor/${building}/${floor}`)
  }

  getBuilding(building: string){
    return this.http.get<IRoomMap[]>(`http://localhost:16177/api/map/getBuilding/${building}`)
  }
}
