import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAcquisitionDTO } from '../interface/CreateAcquisitionDTO';
import { CreateUrgentRequestDTO } from '../interface/CreateUrgentRequestDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodAcquisition } from '../interface/BloodAcquisition';
import { BloodType } from '../interface/BloodType.enum';

@Injectable({
  providedIn: 'root',
})
export class BloodAcquisitionService {
  private apiServerUrl = environment.apiBloodAcquisition;

  constructor(private http: HttpClient) {}

  public createBloodAcquisition(
    bloodAcquisition: CreateAcquisitionDTO
  ): Observable<CreateAcquisitionDTO> {
    return this.http.post<CreateAcquisitionDTO>(
      `${this.apiServerUrl}`,
      bloodAcquisition
    );
  }

  public getBloodAcquisitionsForSpecificDoctor(
    id: number
  ): Observable<BloodAcquisition[]> {
    return this.http.get<BloodAcquisition[]>(
      'http://localhost:16177/doctorAcquisitions/'.concat(id.toString())
    );
  }

  public createUrgentBloodRequest(urgentRequest: CreateUrgentRequestDTO) {
    return this.http.post<CreateUrgentRequestDTO>(
      environment.apiUrgentBloodTransfer,
      urgentRequest
    );
  }
}
