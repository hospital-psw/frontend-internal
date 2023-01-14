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

  constructor(private http: HttpClient) {}

  getRooms(buildingId: number, floor: string) {
    return this.http.get<IRoomMap[]>(
      `${environment.apiMap}/getRooms/${buildingId}/${floor}`
    );
  }

  getBuilding(buildingId: number) {
    return this.http.get<IRoomMap[]>(
      `${environment.apiMap}/getRooms/${buildingId}`
    );
  }

  getBuildings() {
    return this.http.get<IBuilding[]>(
      `${environment.apiMap}/getBuildings`
    );
  }

  editRoom(room: IRoom) {
    return this.http.put<IRoom>(`${environment.apiRooms}`, room);
  }

  editBuilding(building: IBuilding) {
    return this.http.put<IBuilding>(
      `${environment.apiBuildings}`,
      building
    );
  }

  editFloor(floor: IFloor) {
    return this.http.put<IBuilding>(`${environment.apiFloors}`, floor);
  }

  getEquipment(roomId: number) {
    return this.http.get<IEquipment[]>(
      `${environment.apiEquipment}/${roomId}`
    );
  }

  searchRooms(searchCriteriaDto: ISearchCriteriaDto) {
    return this.http.post<IRoom[]>(
      `${environment.apiRooms}`,
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
