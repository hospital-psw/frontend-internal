import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAcquisitionDTO } from '../interface/CreateAcquisitionDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BloodAcquisitionService {
  private apiServerUrl = environment.apiBloodAcquisition;

  constructor(private http: HttpClient) { }

  

  public createBloodAcquisition(
    bloodAcquisition:CreateAcquisitionDTO
  ): Observable<CreateAcquisitionDTO> {
    return this.http.post<CreateAcquisitionDTO>(
      `${this.apiServerUrl}`,
        bloodAcquisition
    );
  }

}
