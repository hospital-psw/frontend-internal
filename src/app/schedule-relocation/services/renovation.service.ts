import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      `http://localhost:16177/api/renovation/recommend`,
      recommendedRequest
    );
  }

  createRenovationRequest(request: IRenovationRequest) {
    console.log(request);
    return this.http.post<IRenovationRequest>(
      `http://localhost:16177/api/renovation/createRenovationRequest`,
      request
    );
  }
}
