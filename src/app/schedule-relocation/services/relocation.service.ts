import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecommendedRelocationRequest } from '../model/RecommendedRelocationRequest';
import { IRelocationRequest } from '../model/RelocationRequest';

@Injectable({
  providedIn: 'root',
})
export class RelocationService {
  constructor(private http: HttpClient) {}

  recommendDateTimes(
    recommendedRelocationRequest: IRecommendedRelocationRequest
  ): Observable<Date[]> {
    return this.http.put<Date[]>(
      `hospital/relocation/recommend`,
      recommendedRelocationRequest
    );
  }

  createRelocationRequest(request: IRelocationRequest) {
    return this.http.post<IRelocationRequest>(
      `hospital/relocation/createRelocationRequest`,
      request
    );
  }
}
