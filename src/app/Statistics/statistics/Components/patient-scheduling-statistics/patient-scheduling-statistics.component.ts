import { Component, ElementRef } from '@angular/core';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { StatisticsService } from '../../Services/statistics.service';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-patient-scheduling-statistics',
  templateUrl: './patient-scheduling-statistics.component.html',
  styleUrls: ['./patient-scheduling-statistics.component.scss']
})
export class PatientSchedulingStatisticsComponent {
  averageScheduleDurationChartData: any = [];
  averageDurationChart: any = [];
  averageSchedulingDuration: any = [];

  numOfTimesOnEachStepChartData: any = []
  numOfTimesOnEachStepChart: any = []
  numOfTimesOnEachStep: any = []
  constructor(
    private statisticsService: StatisticsService,
    private elementRef: ElementRef
  ) {
    Chart.register(...registerables);
    Chart.register(annotationPlugin);
  }
  ngOnInit(): void {
    this.statisticsService
      .getAverageAppointmentSchedulingDuration()
      .subscribe((data) => {
        this.averageScheduleDurationChartData = data;
        this.createAverageScheduleDurationChart();
      });
      this.statisticsService
      .getNumOfTimesSpentOnEachStepOfSchedulingAppointment()
      .subscribe((data) => {
        this.numOfTimesOnEachStepChartData = data;
        this.createNumOfTimesOnEachStepChart();
      });
    }
  createDynamicLabels() {
    let labels = [];
    for (let i = 0; i < this.averageScheduleDurationChartData.length; i++) {
      labels.push('Appointment');
    }
    return labels;
  }
  average() {
    let average = 0;
    for (let i = 0; i < this.averageScheduleDurationChartData.length; i++) {
      average += this.averageScheduleDurationChartData[i];
    }
    return average / this.averageScheduleDurationChartData.length;
  }
  createAverageScheduleDurationChart() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart1`);
    this.averageDurationChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.createDynamicLabels(),
        datasets: [
          {
            label: 'Scheduling duration',
            data: this.averageScheduleDurationChartData,
            backgroundColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            color: 'gray',
            display: true,
            text:
              'Average scheduling duration: ' +
              Math.round(this.average()) +
              's',
            font: {
              size: 20,
            },
            padding: {
              top: 10,
            },
          },
          annotation: {
            autocolors: false,
            annotations: {
              line1: {
                type: 'line',
                yMin: this.average(),
                yMax: this.average(),
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 2,
              },
            },
          },
        },
      } as ChartOptions,
    });
  }
  createNumOfTimesOnEachStepChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart2`);
    this.numOfTimesOnEachStepChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['Pick date', 'Pick medicine branch', 'Pick doctor', 'Pick appointment'],
        datasets: [
          {
            label: 'Number of views for each step',
            data: this.numOfTimesOnEachStepChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            color: 'gray',
            display: true,
            text: 'Number of times on each step',
            font: {
              size: 20,
            },
            padding: {
              top: 10,
            },
          },
        },
      },
    });
  }


}
