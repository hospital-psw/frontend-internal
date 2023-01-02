import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatisticsService } from '../../Services/statistics.service';

@Component({
  selector: 'app-renovation-statistics',
  templateUrl: './renovation-statistics.component.html',
  styleUrls: ['./renovation-statistics.component.scss']
})
export class RenovationStatisticsComponent implements OnInit {
  
  averageScheduleDurationChartData: any = []
  averageDurationChart: any  = [];
  numberOfViewsForEachStepChartData: any = []
  numberOfViewsForEachStepChart: any  = [];
  constructor(private statisticsService: StatisticsService, private elementRef: ElementRef){
    Chart.register(...registerables);
  }
  
  ngOnInit(): void {
    this.statisticsService.getAverageRenovationSchedulingDuration().subscribe(data => {
      this.averageScheduleDurationChartData = data
      this.createAverageScheduleDurationChart()
    })
    this.statisticsService.getNumberOfViewsForEachStep().subscribe(data => {
      this.numberOfViewsForEachStepChartData = data
      this.createNumberOfViewsForEachStepChart()
    })
  }
  averageSchedulingDuration: any = [];
  numberOfViewsForEachStep: any = []

  createAverageScheduleDurationChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart1`);
    this.averageDurationChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: [
          '0-30s',
          '30-60s',
          '60-90s',
          '90-120s',
          '120s+',
        ],
        datasets: [
          {
            label: 'Average scheduling duration',
            data: this.averageScheduleDurationChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
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
            text: 'Average scheduling duration',
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


  createNumberOfViewsForEachStepChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart2`);
    this.averageDurationChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6'
        ],
        datasets: [
          {
            label: 'Number of views for each step',
            data: this.numberOfViewsForEachStepChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
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
            text: 'Number of views for each step',
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
