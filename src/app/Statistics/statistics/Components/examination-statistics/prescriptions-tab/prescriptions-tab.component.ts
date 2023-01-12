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
  prescriptionData: any = [];
  prescriptionChart: any = [];

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
    this.service.getAveragePrescriptions().subscribe(
      (response) => {
        this.prescriptionData = response as any[];
        this.createChart(
          this.prescriptionData.prescriptions,
          this.prescriptionData.average
        );
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  getLabels(values: any) {
    return values.map((el: {}) => '');
  }

  createChart(values: any, average: any) {
    let htmlRef =
      this.elementRef.nativeElement.querySelector(`#chartPrescription`);
    this.prescriptionChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.getLabels(values),
        datasets: [
          {
            label: 'Number of prescriptions',
            data: values,
            backgroundColor: ['rgba(65, 118, 225, 1)'],
            borderColor: ['rgba(65, 118, 225, 1)'],
            borderWidth: 2,
            minBarLength: 2,
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
            text: 'Average created Prescriptions per Examination: ' + average,
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
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 2,
              },
            },
          },
        },
      },
    });
  }
}
