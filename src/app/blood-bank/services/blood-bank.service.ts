import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodBank } from '../model/blood-bank.model';
import { MonthlyTransfer } from '../model/MonthlyTransfer.model';

@Injectable({
  providedIn: 'root',
})
export class BloodBankService {
  apiHost: string = environment.apiBloodBank;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + '/all', {
      headers: this.headers,
    });
  }

  getBloodBank(id: number): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + '/' + id, {
      headers: this.headers,
    });
  }

  deleteBloodBank(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + '/' + id, {
      headers: this.headers,
    });
  }

  registerBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(
      this.apiHost + '/register',
      bloodBank,
      {
        headers: this.headers,
      }
    );
  }

  updateBloodBank(bloodBank: any): Observable<any> {
    return this.http.put<any>(this.apiHost, bloodBank, {
      headers: this.headers,
    });
  }

  checkBoodType(id: number, bloodType: string): Observable<any> {
    return this.http.get<any>(
      this.apiHost + '/checkType/' + id + '/' + bloodType
    );
  }

  saveConfiguration(
    id: number,
    frequently: number,
    reportTo: Date,
    reportFrom: Date
  ) {
    return this.http.patch<any>(
      this.apiHost + '/saveConfiguration',
      {
        id,
        frequently,
        reportTo,
        reportFrom,
      }
    );
  }

  errorHandling(err: any) {
    this.toastr.warning(err.statusText, 'Error: ' + err.status);
  }

  success(message: any) {
    this.toastr.success(message);
  }
  checkBoodTypeAmount(
    id: number,
    bloodType: string,
    amount: number
  ): Observable<any> {
    return this.http.get<any>(
      this.apiHost +
        '/checkAmount/' +
        id +
        '/' +
        bloodType +
        '/' +
        amount
    );
  }

  updateMonthly(id: Number, mt: MonthlyTransfer) {
    return this.http.patch<any>(
      this.apiHost + `/monthlyTransferConfiguration/${id}`,
      mt
    );
  }
}
