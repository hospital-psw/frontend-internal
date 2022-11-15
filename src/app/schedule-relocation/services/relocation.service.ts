import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecommendedRelocationRequest } from "../model/RecommendedRelocationRequest";

@Injectable({
  providedIn: 'root',
})
export class RelocationService {
  constructor(private http: HttpClient) {}

  recommendDateTimes(recommendedRelocationRequest: IRecommendedRelocationRequest) {
    return this.http.put<Date[]>(
      `http://localhost:16177/api/relocation/recommend`, recommendedRelocationRequest
    );
  }

}
