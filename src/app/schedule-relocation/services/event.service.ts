import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRenovationRequestDisplay } from 'src/app/Manager/Model/RenovationRequestDisplay';
import { IRecommendedRelocationRequest } from '../model/RecommendedRelocationRequest';
import { IRelocationRequest } from '../model/RelocationRequest';
import { IRenovationEvent } from '../model/RenovationEvent';
import { IRenovationRequest } from '../model/RenovationRequest';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  createEvent(evt: IRenovationEvent) {
    console.log(evt)
    return this.http.post<number>(
      `hospital/event`,
      evt
    );
  }
}
