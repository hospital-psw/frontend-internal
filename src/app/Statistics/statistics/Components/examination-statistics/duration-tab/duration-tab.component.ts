import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { ExaminationStatisticsService } from '../../../Services/examination-statistics.service';

@Component({
  selector: 'app-duration-tab',
  templateUrl: './duration-tab.component.html',
  styleUrls: ['./duration-tab.component.scss'],
})
export class DurationTabComponent implements OnInit {
  durationData: any = [];
  durationChart: any = [];
  isLoading: boolean;

  specializationData: any = [];
  specializationChart: any = [];

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
    this.isLoading = true;
    this.service.getAverageDuration().subscribe(
      (response) => {
        this.durationData = response;
        let values = this.getValues(this.durationData.examinations);
        this.durationChart = this.createChart(
          values,
          `#duration1`,
          'Average examination duration: ' + this.durationData.averageDuration,
          this.durationData.averageDuration,
          this.getLabels(values)
        );
        this.isLoading = false;
      },
      (error) => {
        this.handleError(error.error);
      }
    );

    this.service.getAverageSpecializationDuration().subscribe((response) => {
      this.specializationData = response;
      let labels = this.getSpecializationLabels();
      let values = this.getSpecializationValues(this.specializationData);
      this.specializationChart = this.createChart(
        values,
        `#duration2`,
        'Average duration by Specialization',
        12,
        labels
      );
      this.isLoading = false;
    });
  }

  createChart(
    stepsData: any,
    refString: string,
    title: string,
    average: number,
    labels: string[]
  ): any {
    let htmlRef = this.elementRef.nativeElement.querySelector(refString);
    let stepsChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Duration(s)',
            data: stepsData,
            backgroundColor: ['rgba(167,130,226, 1)'],
            borderColor: ['rgba(167,130,226, 1)'],
            borderWidth: 2,
            minBarLength: 10,
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
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: average,
                yMax: average,
                borderColor: 'rgb(0, 255, 0)',
                borderWidth: 2,
              },
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

  getValues(chartData: any) {
    let values = chartData.map((el: { duration: number }) => el.duration);

    return values;
  }

  getSpecializationValues(data: any) {
    let numbers = this.getSpecializationLabels().map((el) => 0);
    return data.specializationsStatisticsList.map(
      (el: { averageDuration: number; specialization: number }) =>
        (numbers[el.specialization] = el.averageDuration)
    );
  }

  getSpecializationLabels() {
    return [
      'GENERAL',
      'CARDIOLOGY',
      'NEUROLOGY',
      'DERMATOLOGY',
      'ENDOCRINOLOGY',
      'RADIOLOGY',
      'OPHTHAMOLOGY',
      'DENTISTRY',
    ];
  }
}
