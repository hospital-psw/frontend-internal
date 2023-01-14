import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodRequest } from '../../Model/BloodRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BloodRequestService {
  apiHost: string = environment.apiBloodAcquisition;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getBloodRequest(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(this.apiHost + 'pending', {
      headers: this.headers,
    });
  }

  getBloodRequestId(id: number): Observable<BloodRequest> {
    return this.http.get<BloodRequest>(
      this.apiHost + '/' + id,
      {
        headers: this.headers,
      }
    );
  }

  getAccepted(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(
      this.apiHost + '/get/all/accepted',
      { headers: this.headers }
    );
  }

  getDeclined(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(
      this.apiHost + '/get/all/declined',
      { headers: this.headers }
    );
  }

  getReconsidering(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(
      this.apiHost + '/get/all/reconsidering',
      { headers: this.headers }
    );
  }

  MakeAccepted(id: number): Observable<BloodRequest> {
    return this.http.put<BloodRequest>(this.apiHost + 'accept/' + id, {
      headers: this.headers,
    });
  }

  MakeDeclined(id: number): Observable<BloodRequest> {
    return this.http.put<BloodRequest>(this.apiHost + 'decline/' + id, {
      headers: this.headers,
    });
  }

  reconsiderRequest(id: number, managerComment: string) {
    return this.http.patch<BloodRequest>(this.apiHost + 'handle/', {
      Id: id,
      Status: 3,
      ManagerComment: managerComment,
    });
  }

  editRequest(bloodRequests: BloodRequest) {
    return this.http.put<BloodRequest>(this.apiHost + 'edit/', bloodRequests, {
      headers: this.headers,
    });
  }
}
