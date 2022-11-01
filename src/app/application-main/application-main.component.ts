import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  transition,
  animate,
  trigger,
  state,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-application-main',
  templateUrl: './application-main.component.html',
  styleUrls: ['./application-main.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ApplicationMainComponent implements OnInit {
  name: string;
  hamburger: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      console.log(this.router.url);
      if (this.router.url == '/appointments') {
        this.name = 'Appointments';
      } else if (this.router.url == '/patients') {
        this.name = 'Patients';
      } else if (this.router.url == '/reschedule-appointment/:id') {
        this.name = 'Rescheduling appointment';
      }
    });
  }

  valueEmittedFromChild: string = '';

  ngOnInit(): void {
    this.hamburger = true;
  }

  handleHamburger(valueEmitted: any) {
    console.log('Hello from doctor main component');
    this.valueEmittedFromChild = valueEmitted;
    this.hamburger = !this.hamburger;
  }
}
