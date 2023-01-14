import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreateTenderDTO } from '../interface/CreateTenderDTO';
import { ITender } from '../model/tender.model';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<ITender[]> {
    return this.http.get<ITender[]>(`integration/Tender/active`);
  }

  public finishedTender(tenderId: Number, offerIndex: Number) {
    return this.http.get<ITender[]>(
      `integration/Tender/finish/${tenderId}/${offerIndex}`
    );
  }

  public createTender(tender: CreateTenderDTO): Observable<CreateTenderDTO> {
    return this.http.post<CreateTenderDTO>(
      `integration/Tender`,
      tender
    );
  }

  public generateReport(start: Date | null, end: Date | null) {
    return this.http.post(
      `integration/Tender/generate-report`,
      {
        start,
        end,
      },
      { responseType: 'blob' }
    );
  }
}
