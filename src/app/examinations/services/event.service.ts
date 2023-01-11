import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExaminationStarted } from '../interface/events/ExaminationStarted';
import { Anamnesis } from '../interface/Anamnesis';
import { SymptomsChanged } from '../interface/events/SymptomsChanged';
import { PrescriptionCreated } from '../interface/events/PrescriptionCreated';
import { PrescriptionRemoved } from '../interface/events/PrescriptionRemoved';
import { DescriptionCreated } from '../interface/events/DescriptionCreated';
import { ExaminationFinished } from '../interface/events/ExaminationFinished';
import { ExaminationEvent } from '../interface/events/ExaminationEvent';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiServerUrl = environment.apiExaminationEvent;

  constructor(private http: HttpClient) {}

  public startExamination(
    examinationStarted: ExaminationStarted
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/start`,
      examinationStarted
    );
  }

  public manageSymptom(
    symptomsChanged: SymptomsChanged
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/manage-symptoms`,
      symptomsChanged
    );
  }

  public addPrescription(
    prescriptionCreated: PrescriptionCreated
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/add-prescription`,
      prescriptionCreated
    );
  }

  public removePrescription(
    prescriptionRemoved: PrescriptionRemoved
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/remove-prescription`,
      prescriptionRemoved
    );
  }

  public createDescription(
    descriptionCreated: DescriptionCreated
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/add-description`,
      descriptionCreated
    );
  }

  public finishExamination(
    examinationFinished: ExaminationFinished
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/finish`,
      examinationFinished
    );
  }

  public executeEvent(
    examinationEvent: ExaminationEvent
  ): Observable<Anamnesis> {
    return this.http.post<Anamnesis>(
      `${this.apiServerUrl}/execute-event`,
      examinationEvent
    );
  }
}
