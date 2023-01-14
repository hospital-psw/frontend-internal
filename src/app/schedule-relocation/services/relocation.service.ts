import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
      `${environment.apiRelocation}/recommend`,
      recommendedRelocationRequest
    );
  }

  createRelocationRequest(request: IRelocationRequest) {
    return this.http.post<IRelocationRequest>(
      `${environment.apiRelocation}/createRelocationRequest`,
      request
    );
  }
}
