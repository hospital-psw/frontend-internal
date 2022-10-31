import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  getAnonymous():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiHost + 'api/Feedback/get/AnonymousFeedback', {headers: this.headers});
  }
  getApproved():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiHost + 'api/Feedback/get/AllAprovedFeedback', {headers: this.headers});
  }
  getFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiHost + 'api/Feedback/get/managerfeedback', {headers: this.headers});
  }
}
