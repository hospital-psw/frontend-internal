import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DoctorService } from '../../Services/doctor.service';
import { StatisticsService } from '../../Services/statistics.service';

@Component({
  selector: 'app-tender-money',
  templateUrl: './tender-money.component.html',
  styleUrls: ['./tender-money.component.scss'],
})
export class TenderMoneyComponent implements OnInit {
  chart5_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  vacationsChart: Chart = new Chart('chart5', {
    type: 'line',
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Days of vacation per month',
          data: this.chart5_data,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
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
          font: {
            size: 20,
          },
          text: 'Days of vacation per month',
          padding: {
            top: 10,
          },
        },
      },
    },
  });

  constructor(
    private service: StatisticsService,
    private doctorService: DoctorService
  ) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {}
}
