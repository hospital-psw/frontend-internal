import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ExaminationStatisticsService } from '../../../Services/examination-statistics.service';

@Component({
  selector: 'app-prescriptions-tab',
  templateUrl: './prescriptions-tab.component.html',
  styleUrls: ['./prescriptions-tab.component.scss'],
})
export class PrescriptionsTabComponent implements OnInit {
  constructor(
    private service: ExaminationStatisticsService,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {}
}
