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

  averageNumOfStepsForAppointmentChartData: any = []
  averageNumOfStepsForAppointmentChart: any = []
  averageNumOfStepsForAppointment: any = []

  timeSpentOnEachStepChartData: any = []
  timeSpentOnEachStepChart: any = []
  timeSpentOnEachStep: any = []

  numberOfStepsByAgeChartData: any = []
  numberOfStepsByAgeChart: any = []
  numberOfStepsByAge: any = []

  timeSpentToCreateAppointmentByAgeChartData: any = []
  timeSpentToCreateAppointmentByAgeChart: any = []
  timeSpentToCreateAppointmentByAge: any = []
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
      this.statisticsService
      .GetAverageTimePerStep()
      .subscribe((data) => {
        this.timeSpentOnEachStepChartData = data;
        this.createTimeSpentOnEachStepChart();
      });
      this.statisticsService
      .getNumberOfStepsByAgeGroup()
      .subscribe((data) => {
        this.numberOfStepsByAgeChartData = data;
        this.createNumberOfStepsByAgeChart();
      });
      this.statisticsService
      .getTimeToCreateAppointmentByAge()
      .subscribe((data) => {
        this.timeSpentToCreateAppointmentByAgeChartData = data;
        this.createTimeSpentByAgeChart();
      });
      this.statisticsService
      .getAverageNumberOfStepsForSchedulingAppointment()
      .subscribe((data) => {
        this.averageNumOfStepsForAppointmentChartData = data;
        console.log(data);
        this.createAverageNumOfStepsForAppoitmentChart();
      });
    }
  createDynamicLabels() {
    let labels = [];
    for (let i = 0; i < this.averageScheduleDurationChartData.length; i++) {
      labels.push('Appointment');
    }
    return labels;
  }
  createDynamicLabelsSteps() {
    let labels = [];
    for (let i = 0; i < this.averageNumOfStepsForAppointmentChartData.length; i++) {
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
  averageSteps() {
    let average = 0;
    for (let i = 0; i < this.averageNumOfStepsForAppointmentChartData.length; i++) {
      average += this.averageNumOfStepsForAppointmentChartData[i];
    }
    return average / this.averageNumOfStepsForAppointmentChartData.length;
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
            backgroundColor: ['rgba(255, 0, 0, 1)'],
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
            label: 'Number of times on each step',
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

  createTimeSpentOnEachStepChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart3`);
    this.timeSpentOnEachStepChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['Pick date', 'Pick medicine branch', 'Pick doctor', 'Pick appointment'],
        datasets: [
          {
            label: 'Average time spent on each step',
            data: this.timeSpentOnEachStepChartData,
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
            text: 'Average time spent on each step',
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
  createNumberOfStepsByAgeChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart4`);
    this.numberOfStepsByAgeChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['0-15', '16-25', '26-35', '36-45', '46-60', '60>'],
        datasets: [
          {
            label: 'Average number of steps by age group',
            data: this.numberOfStepsByAgeChartData,
            backgroundColor: [
              'rgba(46, 66, 91, 1)',
            ],
            borderColor: [
              'rgba(101, 118, 138, 1)',
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
            text: 'Average number of steps by age group',
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
  createTimeSpentByAgeChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart5`);
    this.timeSpentToCreateAppointmentByAgeChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['0-15', '16-25', '26-35', '36-45', '46-60', '60>'],
        datasets: [
          {
            label: 'Average time for creating appointment by age group',
            data: this.timeSpentToCreateAppointmentByAgeChartData,
            backgroundColor: [
              'rgba(46, 66, 91, 1)',
            ],
            borderColor: [
              'rgba(101, 118, 138, 1)',
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
            text: 'Average time for creating appointment by age group',
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
  createAverageNumOfStepsForAppoitmentChart() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart6`);
    this.averageNumOfStepsForAppointmentChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.createDynamicLabelsSteps(),
        datasets: [
          {
            label: 'Number of scheduling steps',
            data: this.averageNumOfStepsForAppointmentChartData,
            backgroundColor: ['rgba(255, 0, 0, 1)'],
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
              'Average number of scheduling steps: ' +
              Math.round(this.averageSteps()),
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
                yMin: this.averageSteps(),
                yMax: this.averageSteps(),
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 2,
              },
            },
          },
        },
      } as ChartOptions,
    });
  }

}
