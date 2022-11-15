import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRecommendedRelocationRequest } from "../model/RecommendedRelocationRequest";
import { IRelocationRequest } from "../model/RelocationRequest";

@Injectable({
  providedIn: 'root',
})
export class RelocationService {
  constructor(private http: HttpClient) {}

  recommendDateTimes(recommendedRelocationRequest: IRecommendedRelocationRequest) : Observable<Date[]> {
    return this.http.put<Date[]>(
      `http://localhost:16177/api/relocation/recommend`, recommendedRelocationRequest
    );
  }

  createRelocationRequest(request: IRelocationRequest) {
    return this.http.post<IRelocationRequest>(
      `http://localhost:16177/api/relocation/createRelocationRequest`, request
    );
  }

}
