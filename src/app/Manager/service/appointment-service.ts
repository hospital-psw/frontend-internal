import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppointmentDisplay } from '../Model/AppointmentDisplay';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAppointments(roomId: number): Observable<IAppointmentDisplay[]> {
    return this.http.get<IAppointmentDisplay[]>(
      `${environment.apiAppointmentUrl}/room/${roomId}`
    );
  }
}
