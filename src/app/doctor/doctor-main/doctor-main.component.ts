import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.component.html',
  styleUrls: ['./doctor-main.component.scss'],
})
export class DoctorMainComponent implements OnInit {
  name: string;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url == 'appointments') {
        this.name = 'Appointments';
      } else if (this.router.url == 'patients') {
        this.name = 'Patients';
      }
    });
  }

  ngOnInit(): void {
    return;
  }
}
