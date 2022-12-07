import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  transition,
  animate,
  trigger,
  state,
  style,
} from '@angular/animations';
import { AuthService } from '../common/auth/service/auth.service';

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
  private userSub: Subscription;
  isLogged = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.router.events.subscribe(() => {
      if (this.router.url == '/appointments') {
        this.name = 'Appointments';
      } else if (this.router.url == '/patients') {
        this.name = 'Patients';
      } else if (this.router.url.includes('/reschedule-appointment')) {
        this.name = 'Rescheduling appointment';
      } else if (this.router.url.includes('/newsfeed')) {
        this.name = 'Newsfeed';
      } else if (this.router.url.includes('/bloodbank')) {
        this.name = 'Blood banks';
      } else if (this.router.url.includes('/feedback')) {
        this.name = 'Feedbacks';
      } else if (this.router.url.includes('/display')) {
        this.name = 'Manager';
      } else if (this.router.url.includes('/vacation-requests')) {
        this.name = 'Create vacation request';
      } else if (this.router.url == '/show-treatments') {
        this.name = 'Medical treatments';
      } else if (this.router.url.includes('/treatment')) {
        this.name = 'Stationary Treatment';
      } else if (this.router.url.includes('/statistics')) {
        this.name = 'Hospital Statistics';
      }
    });
  }

  valueEmittedFromChild: string = '';

  ngOnInit(): void {
    this.hamburger = true;
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isLogged = !!user;
    });
  }

  handleHamburger(valueEmitted: any) {
    this.valueEmittedFromChild = valueEmitted;
    this.hamburger = !this.hamburger;
  }
}
