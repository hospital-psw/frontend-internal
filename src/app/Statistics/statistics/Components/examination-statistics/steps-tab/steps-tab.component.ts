import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ExaminationStatisticsService } from '../../../Services/examination-statistics.service';

@Component({
  selector: 'app-steps-tab',
  templateUrl: './steps-tab.component.html',
  styleUrls: ['./steps-tab.component.scss'],
})
export class StepsTabComponent implements OnInit {
  stepsData: any = [];
  averageSteps: any;
  stepsChart: any = [];

  backStepsData: any = [];
  averageBackSteps: any;
  backStepsChart: any = [];

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
    this.service.getAverageSteps().subscribe(
      (response) => {
        this.stepsData = response;
        this.stepsChart = this.createStepsChart(
          this.stepsData.steps,
          `#steps1`,
          'Average steps: ' + this.stepsData.averageSteps
        );
      },
      (error) => {
        this.handleError(error.error);
      }
    );

    this.service.getAverageBackSteps().subscribe(
      (response) => {
        this.backStepsData = response;
        this.backStepsChart = this.createStepsChart(
          this.getValues(this.backStepsData),
          `#steps2`,
          'Average back steps: ' + this.backStepsData.averageBackStepsNumber
        );
      },
      (error) => {
        this.handleError(error.error);
      }
    );
  }

  getValues(chartData: any) {
    let values = chartData.examinationBackSteps.map(
      (el: { backStepsNumber: number }) => el.backStepsNumber
    );

    return values;
  }

  createStepsChart(stepsData: any, refString: string, title: string): any {
    console.log('RefString: ', refString);
    console.log('ChartData: ', stepsData);
    let htmlRef = this.elementRef.nativeElement.querySelector(refString);
    let stepsChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.getLabels(stepsData),
        datasets: [
          {
            label: title,
            data: stepsData,
            backgroundColor: ['rgba(51, 184, 100, 1)'],
            borderColor: ['rgba(51, 184, 100, 1)'],
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
            text: title,
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      },
    });

    return stepsChart;
  }

  handleError(text: string) {
    this.toastr.error(text);
  }

  getLabels(array: any) {
    return array.map((el: {}) => '');
  }
}
