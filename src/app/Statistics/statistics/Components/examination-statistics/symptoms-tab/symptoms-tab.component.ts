import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ExaminationStatisticsService } from '../../../Services/examination-statistics.service';

@Component({
  selector: 'app-symptoms-tab',
  templateUrl: './symptoms-tab.component.html',
  styleUrls: ['./symptoms-tab.component.scss'],
})
export class SymptomsTabComponent implements OnInit {
  chartData: any = [];
  symptomChart: any = [];
  symptomNames: any[];
  symptomValues: any[];

  constructor(
    private service: ExaminationStatisticsService,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics() {
    this.service.getSymptomStats().subscribe(
      (response) => {
        this.chartData = response as any[];
        this.getValues();
        this.getLabels();
        this.createChart(this.symptomNames, this.symptomValues);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  createChart(labels: any, values: any) {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart1`);
    this.symptomChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Frequency (%)',
            data: values,
            backgroundColor: ['rgba(255, 99, 132, 1)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            offset: true,
          },
        },
        animation: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            color: 'gray',
            display: true,
            font: {
              size: 20,
            },
            text: 'Symptom frequency in Sick Patients',
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      },
    });
  }

  getLabels(): void {
    this.symptomNames = this.chartData.symptomStatisticsList.map(
      (el: { name: string }) => el.name
    );
  }

  getValues(): void {
    this.symptomValues = this.chartData.symptomStatisticsList.map(
      (el: { average: number }) => el.average * 100
    );
  }
}
