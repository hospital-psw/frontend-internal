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
import { MatDialogModule } from '@angular/material/dialog';
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
import { ShowTendersComponent } from './tenders/show-tenders/show-tenders.component';
import { JwtService } from './common/auth/service/jwt.service';
import { LoginModule } from './login/login.module';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { ExaminationsModule } from './examinations/examinations.module';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';
import { DoctorSidebarComponent } from './common/doctor-sidebar/doctor-sidebar.component';
import { ManagerSidebarComponent } from './common/manager-sidebar/manager-sidebar.component';
import { BlockPatientsModule } from './Manager/block-patients/block-patients.module';
import { BloodUnitsOverviewComponent } from './BloodManagment/BloodUnitsOverview/blood-units-overview/blood-units-overview.component';
import { TenderReportComponent } from './tenders/tender-report/tender-report.component';
import { BloodUnitCardComponent } from './BloodManagment/BloodUnitsOverview/blood-unit-card/blood-unit-card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BloodAdditionsOverviewComponent } from './BloodManagment/BloodAdditionsOverview/blood-additions-overview/blood-additions-overview.component';
import { DisplayComponent } from './EXAMPLE/display/display.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { OpenTendersComponent } from './tenders/open-tenders/open-tenders.component';
import { TenderOfferComponent } from './tenders/tender-offer/tender-offer.component';
import { ClosedTendersComponent } from './tenders/closed-tenders/closed-tenders.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidebarComponent,
    ApplicationMainComponent,
    BloodAcquisitionComponent,
    DoctorRequestsComponent,
    BloodExpenditureComponent,
    ShowTendersComponent,
    UrgentBloodRequestComponent,
    CreateTenderComponent,
    DoctorSidebarComponent,
    ManagerSidebarComponent,
    BloodUnitsOverviewComponent,
    TenderReportComponent,
    BloodUnitCardComponent,
    BloodAdditionsOverviewComponent,
    DisplayComponent,
    OpenTendersComponent,
    TenderOfferComponent,
    ClosedTendersComponent,
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
    MatExpansionModule,
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
    MatTabsModule,
    VacationRequestModule,
    MatInputModule,
    NgxUiLoaderModule,
    MatDialogModule,
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
    ExaminationsModule,
    BlockPatientsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      percent: 85,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#CC0000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false,
    }),
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
