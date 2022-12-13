import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-consiliums',
  templateUrl: './all-consiliums.component.html',
  styleUrls: ['./all-consiliums.component.scss'],
})
export class AllConsiliumsComponent {
  constructor(private router: Router) {}

  scheduleConsilium(): void {
    this.router.navigate(['/app/schedule-consilium']);
  }
}
