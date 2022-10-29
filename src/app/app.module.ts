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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppointmentModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
