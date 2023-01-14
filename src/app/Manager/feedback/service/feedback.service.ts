import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../interface/feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  apiHost: string = environment.apiFeedback;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getAnonymous(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/anonymous',
      { headers: this.headers }
    );
  }
  getApproved(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/approved',
      { headers: this.headers }
    );
  }
  getDenied(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/denied',
      { headers: this.headers }
    );
  }
  getPending(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/pending',
      { headers: this.headers }
    );
  }
  getPublic(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/public',
      { headers: this.headers }
    );
  }
  getPrivate(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/all/private',
      { headers: this.headers }
    );
  }
  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.apiHost + '/get/manager/feedback',
      { headers: this.headers }
    );
  }
  MakeApproved(id: number): Observable<Feedback> {
    return this.http.put<Feedback>(
      this.apiHost + '/make/approved/' + id,
      { headers: this.headers }
    );
  }
  MakeDenied(id: number): Observable<Feedback> {
    return this.http.put<Feedback>(
      this.apiHost + '/make/denied/' + id,
      { headers: this.headers }
    );
  }
  MakePending(id: number): Observable<Feedback> {
    return this.http.put<Feedback>(
      this.apiHost + '/make/pending/' + id,
      { headers: this.headers }
    );
  }
}
