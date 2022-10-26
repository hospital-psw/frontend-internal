import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiHost: string = 'http://localhost:16177/';

  constructor(private http: HttpClient) { }

  getFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiHost + 'api/Feedback/get/welcome/page');
  }
}
