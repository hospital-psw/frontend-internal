import { ISearchCriteriaDto } from './../Model/Dto/SearchCriteriaDto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from '../Model/Room';
import { IBuilding } from '../Model/Building';
import { IRoomMap } from '../Model/RoomMap';
import { IFloor } from '../Model/Floor';
import { IEquipment } from '../Model/Equipment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiServerUrl = environment.apiRooms;

  constructor(private http: HttpClient) { }

  getRooms(buildingId: number, floor: string) {
    return this.http.get<IRoomMap[]>(
      `http://localhost:16177/api/map/getRooms/${buildingId}/${floor}`
    );
  }

  getBuilding(buildingId: number) {
    return this.http.get<IRoomMap[]>(
      `http://localhost:16177/api/map/getRooms/${buildingId}`
    );
  }

  getBuildings() {
    return this.http.get<IBuilding[]>(
      `http://localhost:16177/api/map/getBuildings`
    );
  }

  editRoom(room: IRoom) {
    return this.http.put<IRoom>(`http://localhost:16177/api/rooms`, room);
  }

  editBuilding(building: IBuilding) {
    return this.http.put<IBuilding>(
      `http://localhost:16177/api/buildings`,
      building
    );
  }

  editFloor(floor: IFloor) {
    return this.http.put<IBuilding>(`http://localhost:16177/api/floors`, floor);
  }

  getEquipment(roomId: number) {
    return this.http.get<IEquipment[]>(
      `http://localhost:16177/api/Equipment/${roomId}`
    );
  }

  searchRooms(searchCriteriaDto: ISearchCriteriaDto) {
    return this.http.post<IRoom[]>(
      `http://localhost:16177/api/rooms`,
      searchCriteriaDto
    );
  }

  public getAvailableRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(`${this.apiServerUrl}/available`);
  }

  getRoomsWithWorkingHour(workingHourId: number): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(
      `${this.apiServerUrl}/workhour-rooms/${workingHourId}`
    );
  }
}
