import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRenovationRequestDisplay } from 'src/app/Manager/Model/RenovationRequestDisplay';
import { environment } from 'src/environments/environment';
import { IRecommendedRelocationRequest } from '../model/RecommendedRelocationRequest';
import { IRelocationRequest } from '../model/RelocationRequest';
import { IRenovationRequest } from '../model/RenovationRequest';

@Injectable({
  providedIn: 'root',
})
export class RenovationService {
  constructor(private http: HttpClient) {}

  recommendDateTimes(
    recommendedRequest: IRecommendedRelocationRequest
  ): Observable<Date[]> {
    return this.http.put<Date[]>(
      `${environment.apiRenovation}/recommend`,
      recommendedRequest
    );
  }

  createRenovationRequest(request: IRenovationRequest) {
    console.log(request);
    return this.http.post<IRenovationRequest>(
      `${environment.apiRenovation}/createRenovationRequest`,
      request
    );
  }

  getRenovations(roomId: number): Observable<IRenovationRequestDisplay[]> {
    return this.http.get<IRenovationRequestDisplay[]>(
      `${environment.apiRenovation}/${roomId}`
    );
  }

  decline(requestId: number): Observable<any> {
    return this.http.post<IRenovationRequestDisplay[]>(
      `${environment.apiRenovation}/decline`,
      requestId
    );
  }
}
