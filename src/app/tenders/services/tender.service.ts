import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateTenderDTO } from '../interface/CreateTenderDTO';
import { ITender } from '../model/tender.model';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<ITender[]> {
    return this.http.get<ITender[]>(`${environment.apiTenderIntegration}/active`);
  }
  public getClosed(): Observable<ITender[]> {
    return this.http.get<ITender[]>(`${environment.apiTenderIntegration}/closed`);
  }

  public finishedTender(tenderId: Number, offerIndex: Number) {
    return this.http.get<ITender[]>(
      `${environment.apiTenderIntegration}/finish/${tenderId}/${offerIndex}`
    );
  }

  public createTender(tender: CreateTenderDTO): Observable<CreateTenderDTO> {
    return this.http.post<CreateTenderDTO>(
      `${environment.apiTenderIntegration}`,
      tender
    );
  }

  public generateReport(start: Date | null, end: Date | null) {
    return this.http.post(
      `${environment.apiTenderIntegration}/generate-report`,
      {
        start,
        end,
      },
      { responseType: 'blob' }
    );
  }
}
