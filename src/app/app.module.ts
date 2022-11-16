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
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidebarComponent,
    ApplicationMainComponent,
  ],
  imports: [
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
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ViewRoomsModule,
    BloodBankModule,
    MedicalTreatmentModule,
    NewsfeedModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    FormsModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class AppModule {}
