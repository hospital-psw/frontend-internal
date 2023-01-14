import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRelocationRequestDisplay } from '../Model/RelocationRequestDisplay';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RelocationRequestService {
  constructor(private http: HttpClient) {}

  getRelocationRequests(
    roomId: number
  ): Observable<IRelocationRequestDisplay[]> {
    return this.http.get<IRelocationRequestDisplay[]>(
      `${environment.apiRelocation}/${roomId}`
    );
  }

  decline(requestId: number): Observable<any> {
    return this.http.post<IRelocationRequestDisplay[]>(
      `${environment.apiRelocation}/decline`,
      requestId
    );
  }
}
