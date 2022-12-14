import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anamnesis } from '../interface/Anamnesis';
import { NewAnamnesis } from '../interface/NewAnamnesis';

@Injectable({
  providedIn: 'root',
})
export class AnamnesisService {
  private apiServerUrl = environment.apiAnamnesis;

  constructor(private http: HttpClient) {}

  public createAnamnesis(newAnamnesis: NewAnamnesis): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(`${this.apiServerUrl}/`, newAnamnesis);
  }
}
