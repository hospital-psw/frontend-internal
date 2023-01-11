import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ExaminationStatisticsService } from '../../../Services/examination-statistics.service';

@Component({
  selector: 'app-duration-tab',
  templateUrl: './duration-tab.component.html',
  styleUrls: ['./duration-tab.component.scss'],
})
export class DurationTabComponent {}
