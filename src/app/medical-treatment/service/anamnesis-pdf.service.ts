import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnamnesesPdfDTO } from '../interface/AnamnesesPdfDTO';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisPdfService {

  private apiServerUrl = environment.apiAnamnesisPdfUrl;

  constructor(private http: HttpClient) { }

  public generateAnamnesisPdf(dto: AnamnesesPdfDTO): Observable<AnamnesesPdfDTO> {
    return this.http.post<AnamnesesPdfDTO>(`${this.apiServerUrl}`,dto);
  }
}
