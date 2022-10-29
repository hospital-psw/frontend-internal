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
import { DoctorMainComponent } from './schedule/doctor-main/doctor-main.component';
import { PatientTableComponent } from './schedule/patients/patient-table/patient-table.component';
import { ViewRoomsModule } from './Manager/view-rooms/view-rooms.module';
import { ShowDetailsComponent } from './Manager/view-rooms/show-details/show-details.component';
import { BloodBankModule } from './blood-bank/blood-bank.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidebarComponent,
    DoctorMainComponent,
    PatientTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppointmentModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ViewRoomsModule,
    BloodBankModule,
  ],
  bootstrap: [AppComponent],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class AppModule {}
