import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrgentBloodTransferService {
  private apiHost = environment.apiUrgentBloodTransfer;
  
  constructor(private http: HttpClient) { }

  sendReport(start: Date, end: Date, sendEmail: boolean) {
    return this.http.post(`${this.apiHost}/report`, {start: start, end: end, sendEmail: sendEmail}, {responseType: 'blob'});
  }

}
