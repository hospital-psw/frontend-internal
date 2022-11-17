import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/all', {
      headers: this.headers,
    });
  }

  getPublished(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/published', {
      headers: this.headers,
    });
  }

  getArchived(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/archived', {
      headers: this.headers,
    });
  }

  getPending(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/pending', {
      headers: this.headers,
    });
  }

  publish(id: number): Observable<News> {
    return this.http.post<News>(this.apiHost + 'api/News/publish/' + id, {
      headers: this.headers,
    });
  }

  archive(id: number): Observable<News> {
    return this.http.post<News>(this.apiHost + 'api/News/archive/' + id, {
      headers: this.headers,
    });
  }
}
