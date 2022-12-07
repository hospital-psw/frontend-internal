import { MedicalTreatmentModule } from './medical-treatment/medical-treatment.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppointmentModule } from './schedule/appointment.module';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ApplicationMainComponent } from './application-main/application-main.component';
import { ViewRoomsModule } from './Manager/view-rooms/view-rooms.module';
import { MatTableModule } from '@angular/material/table';
import { FeedbackModule } from './../app/Manager/feedback/feedback.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BloodBankModule } from './blood-bank/blood-bank.module';
import { ToastrModule } from 'ngx-toastr';
import { BloodAcquisitionComponent } from './BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { BloodRequestModule } from './../app/Manager/blood-request/blood-request.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { VacationRequestModule } from './vacation-request/vacation-request.module';
import { VacationRequestsModule } from './Manager/view-vacation-requests/vacation-requests.module';
import { StatisticsModule } from './Statistics/statistics/statistics.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { DoctorRequestsComponent } from './BloodManagment/doctor-requests/doctor-requests.component';
import { BloodExpenditureComponent } from './BloodManagment/BloodExpenditure/blood-expenditure/blood-expenditure.component';
import { JwtService } from './common/auth/service/jwt.service';
import { LoginModule } from './login/login.module';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidebarComponent,
    ApplicationMainComponent,
    BloodAcquisitionComponent,
    DoctorRequestsComponent,
    BloodExpenditureComponent,
    UrgentBloodRequestComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    AppointmentModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ViewRoomsModule,
    MatTableModule,
    FeedbackModule,
    BloodRequestModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ViewRoomsModule,
    BloodBankModule,
    MedicalTreatmentModule,
    NewsfeedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    VacationRequestModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    FormsModule,
    VacationRequestsModule,
    StatisticsModule,
    MatSelectModule,
    MatSliderModule,
    MatTableModule,
    LoginModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
  providers: [
    DatePipe,
    JwtService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class AppModule {}
