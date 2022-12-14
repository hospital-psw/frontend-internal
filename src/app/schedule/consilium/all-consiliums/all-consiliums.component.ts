import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { ScheduleService } from '../../service/schedule.service';
import { MatTableDataSource } from '@angular/material/table';
import { Consilium } from '../../interface/Consilium';
import { HttpErrorResponse } from '@angular/common/http';
import { DisplayConsiliumDto } from '../../interface/DisplayConsiliumDto';

@Component({
  selector: 'app-all-consiliums',
  templateUrl: './all-consiliums.component.html',
  styleUrls: ['./all-consiliums.component.scss'],
})
export class AllConsiliumsComponent implements OnInit {
  public dataSource = new MatTableDataSource<DisplayConsiliumDto>();
  public consiliums: DisplayConsiliumDto[] = [];
  public displayedColumns = ['date', 'topic', 'duration', 'room'];

  public doctorId: number;

  constructor(
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });

    this.refreshData();
  }

  public refreshData(): void {
    this.scheduleService.getAllConsiliumsByDoctorId(this.doctorId).subscribe(
      (res) => {
        this.consiliums = res;
        this.dataSource.data = this.consiliums;
      },
      (error: HttpErrorResponse) => {
        this.toaster.error(error.message);
      }
    );
  }

  scheduleConsilium(): void {
    this.router.navigate(['/app/schedule-consilium']);
  }
}
