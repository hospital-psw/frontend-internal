import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  apiHost: string = environment.apiNews;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(environment.apiNews + '/all', {
      headers: this.headers,
    });
  }

  getPublished(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + '/published', {
      headers: this.headers,
    });
  }

  getArchived(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + '/archived', {
      headers: this.headers,
    });
  }

  getPending(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + '/pending', {
      headers: this.headers,
    });
  }

  publish(id: number): Observable<News> {
    return this.http.post<News>(this.apiHost + '/publish/' + id, {
      headers: this.headers,
    });
  }

  archive(id: number): Observable<News> {
    return this.http.post<News>(this.apiHost + '/archive/' + id, {
      headers: this.headers,
    });
  }
}
