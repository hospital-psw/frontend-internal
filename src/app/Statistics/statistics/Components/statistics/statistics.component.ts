import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from '../../Services/statistics.service';
import { Chart, registerables } from 'chart.js';
import { DataTableItem } from '../data-table/data-table-datasource';
import { DoctorService } from '../../Services/doctor.service';
import { isThisISOWeek, parse } from 'date-fns';
import { TenderService } from '../../Services/tender.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AdditiveBlending } from 'three';
import { DoctorOptionalStatisticDto } from 'src/app/Manager/Model/Dto/DoctorOptionalStatisticDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  appointmentChart: any = [];
  patientChart: any = [];
  agePyramid: any = [];
  usersChart: any = [];
  currentTab: number = 0;
  max: number = 0;
  tableData: DataTableItem[] = [];
  chart5_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  vacationsChart: any;

  chart6_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  doctorYearlyBookingChart: any = [];
  doctors: any = [];

  yearView = false;
  monthlyView = false;
  optionalView = false;

  chartTenderMoneyData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  tenderMoneyChart: any = [];

  tenderBloodQuantityChart: any;
  chart7_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  doctorOptionalBookingChart: any = [];
  doctorOptionalBookingData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(
    private service: StatisticsService,
    private doctorService: DoctorService,
    private tenderService: TenderService,
    private router: Router,
  ) {
    Chart.register(...registerables);
  }

  goToUrgentBloodTransferPage() {
    this.router.navigate(['app/statistics/urgent-blood-transfer']);
  }

  getMax(data: [], data1: []) {
    let max = 0;
    data.forEach((element) => {
      if (element > max) max = element;
    });
    data1.forEach((element) => {
      if (element > max) max = element;
    });
    return max;
  }

  negateArray(data: []) {
    let returnArray: number[] = [];
    data.forEach((element) => {
      returnArray.push(element * -1);
    });
    return returnArray;
  }

  chart_data: any = [];

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((data) => {
      this.doctors = data;
    });
    this.service.getStatistics().subscribe((data) => {
      this.chart_data = data;

      this.tableData.push({
        groupName: 'Male',
        group1: this.chart_data.chart3Male.at(0),
        group2: this.chart_data.chart3Male.at(1),
        group3: this.chart_data.chart3Male.at(2),
        group4: this.chart_data.chart3Male.at(3),
        group5: this.chart_data.chart3Male.at(4),
        group6: this.chart_data.chart3Male.at(5),
      });
      this.tableData.push({
        groupName: 'Female',
        group1: this.chart_data.chart3Female.at(0),
        group2: this.chart_data.chart3Female.at(1),
        group3: this.chart_data.chart3Female.at(2),
        group4: this.chart_data.chart3Female.at(3),
        group5: this.chart_data.chart3Female.at(4),
        group6: this.chart_data.chart3Female.at(5),
      });

      this.max = this.getMax(
        this.chart_data.chart3Male,
        this.chart_data.chart3Female
      );
      this.chart_data.chart3Female = this.negateArray(
        this.chart_data.chart3Female
      );

      this.appointmentChart = new Chart('chart1', {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
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
              label: 'Number of appointments per month',
              data: this.chart_data.chart1,
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
              text: 'Number of appointments per month',
              padding: {
                top: 10,
              },
            },
          },
        },
      });
      this.patientChart = new Chart('chart2', {
        type: 'bar',
        data: {
          labels: this.chart_data.chart2Names,
          datasets: [
            {
              label: 'Patients per doctor',
              data: this.chart_data.chart2Values,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
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
              text: 'Number of patients per doctor',
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
      this.agePyramid = new Chart('chart3', {
        type: 'bar',
        data: {
          labels: ['60+', '45-60', '35-45', '25-35', '15-25', '0-15'],
          datasets: [
            {
              label: 'Male patients',
              data: this.chart_data.chart3Male,
              backgroundColor: ['rgba(108, 160, 220, 1)'],
              borderColor: ['rgba(72, 61, 219, 1)'],
              borderWidth: 3,
              borderRadius: 5,
            },
            {
              label: 'Female patients',
              data: this.chart_data.chart3Female,
              backgroundColor: ['rgba(255, 192, 183, 1)'],
              borderColor: ['rgba(245, 153, 140, 1)'],
              borderWidth: 3,
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              stacked: true,
              max: this.max + Math.ceil(this.max / 10),
              min: -(this.max + Math.ceil(this.max / 10)),
              ticks: {
                callback: function (value, index, values): any {
                  return Math.abs(value as number);
                },
              },
            },
            y: {
              stacked: true,
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              yAlign: 'bottom',
              titleAlign: 'center',
              callbacks: {
                label: function (context): any {
                  return `${context.dataset.label} ${Math.abs(
                    context.raw as number
                  )}`;
                },
              },
            },
            legend: {
              labels: {
                generateLabels(chart): any {
                  const data = chart.data;
                  return data.datasets?.map(function (dataset, index) {
                    return {
                      fillStyle: dataset.backgroundColor,
                      strokeStyle: dataset.borderColor,
                      text: dataset.label,
                      hidden: false,
                      index: index,
                    };
                  });
                },
              },
              title: {
                color: 'gray',
                display: true,
                text: 'Age pyramid',
                font: {
                  size: 20,
                  weight: 'bold',
                },
                padding: {
                  top: 10,
                },
              },
            },
          },
        },
      });
      this.usersChart = new Chart('chart4', {
        type: 'pie',
        data: {
          labels: ['Patient', 'General doctor', 'Neurologist', 'Cardiologist'],
          datasets: [
            {
              label: 'Who is using our app?',
              data: this.chart_data.chart4,
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
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              title: {
                color: 'gray',
                display: true,
                text: 'Who is using our app?',
                font: {
                  size: 20,
                  weight: 'bold',
                },
                padding: {
                  top: 10,
                },
              },
            },
          },
        },
      });
    });

    this.vacationsChart = new Chart('chart5', {
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

    this.doctorYearlyBookingChart = new Chart('chart6', {
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
            label: 'Number of appointments per month',
            data: this.chart6_data,
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
            text: 'Number of appointments per month',
            padding: {
              top: 10,
            },
          },
        },
      },
    });

    this.tenderMoneyChart = new Chart('chart8', {
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
            label: 'Quantity of blood per month',
            data: this.chartTenderMoneyData,
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
            text: 'Quantity of blood per month',
            padding: {
              top: 10,
            },
          },
        },
      },
    });
    this.tenderBloodQuantityChart = new Chart('chart7', {
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
            label: 'Quantity of blood per month',
            data: this.chart7_data,
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
            text: 'Quantity of blood per month',
            padding: {
              top: 10,
            },
          },
        },
      },
    });
    this.doctorOptionalBookingChart = new Chart('chart9', {
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
            label: 'Number of appointments per year',
            data: this.doctorOptionalBookingData,
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
            text: 'Number of appointments per year',
            padding: {
              top: 10,
            },
          },
        },
      },
    });
  }
  getVacationStatistic(event: any) {
    //pozvati funkciju za dobijanje podataka i proslediti event.value
    console.log('doktor id:');
    console.log(event.value);
    this.vacationsChart.destroy();
    this.service.getVacationStatistics(event.value).subscribe((data) => {
      this.chart5_data = data;
      console.log(this.chart5_data);
      this.vacationsChart = new Chart('chart5', {
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
    });
  }

  year: any = null;
  doctor: any = null;
  month: any = null;

  saveYear(event: any) {
    this.year = parseInt(event.value);
    this.getDoctorYearlyBookingStatistic();
  }
  saveDoctor(event: any) {
    this.doctor = event.value;
    this.getDoctorYearlyBookingStatistic();
  }
  saveMonth(event: any) {
    this.month = parseInt(event.value);
    this.getDoctorMonthlyBookingStatistic();
  }

  saveDate(event: any) {
    this.getDoctorOptionalBookingStatistic();
  }

  getLabelsBasedOnMonth(month: number) {
    switch (month) {
      case 1:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 2:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28,
        ];
      case 3:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 4:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];
      case 5:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 6:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];
      case 7:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 8:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 9:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];
      case 10:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
      case 11:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];
      case 12:
        return [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
    }
    return [];
  }

  getDoctorMonthlyBookingStatistic() {
    if (this.year == null || this.doctor == null || this.month == null) return;
    this.doctorYearlyBookingChart.destroy();
    this.service
      .getDoctorMonthlyBookingStatistics(this.doctor, this.month, this.year)
      .subscribe((data) => {
        this.chart6_data = data;
        this.doctorYearlyBookingChart = new Chart('chart6', {
          type: 'line',
          data: {
            labels: this.getLabelsBasedOnMonth(this.month),
            datasets: [
              {
                label: 'Number of appointments per month',
                data: this.chart6_data,
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
                text: 'Number of appointments per month',
                padding: {
                  top: 10,
                },
              },
            },
          },
        });
      });
  }

  saveOption(evt: any) {
    if (evt.value === 'YEARLY') {
      this.yearView = true;
      this.monthlyView = false;
      this.optionalView = false;
    } else if (evt.value === 'MONTHLY') {
      this.yearView = false;
      this.monthlyView = true;
      this.optionalView = false;
    } else if (evt.value === 'OPTIONAL') {
      this.yearView = false;
      this.monthlyView = false;
      this.optionalView = true;
    }
  }

  getDoctorYearlyBookingStatistic() {
    console.log(this.year);
    console.log(this.doctor);
    if (this.year == null || this.doctor == null) return;
    this.doctorYearlyBookingChart.destroy();
    this.service
      .getDoctorYearlyBookingStatistics(this.doctor, this.year)
      .subscribe((data) => {
        this.chart6_data = data;
        this.doctorYearlyBookingChart = new Chart('chart6', {
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
                label: 'Number of appointments per month',
                data: this.chart6_data,
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
                text: 'Number of appointments per month',
                padding: {
                  top: 10,
                },
              },
            },
          },
        });
      });
  }
  changeYear(event: any) {
    /*event: any*/
    //pozvati funkciju za dobijanje podataka i proslediti event.value
    console.log(event.value);
    this.tenderMoneyChart.destroy();
    this.service.getMoneyPerMonth(event.value).subscribe((data) => {
      this.chartTenderMoneyData = data;
      console.log(this.chartTenderMoneyData);
      this.tenderMoneyChart = new Chart('chart8', {
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
              label: 'Money on tenders per month',
              data: this.chartTenderMoneyData,
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
              text: 'Money on tenders per month',
              padding: {
                top: 10,
              },
            },
          },
        },
      });
    });
  }

  bloodType: any = null;
  saveBloodType(event: any) {
    this.bloodType = parseInt(event.value);
    this.getQuantityOfBloodPerMonth();
  }
  year1: any = null;
  saveYear1(event: any) {
    this.year1 = parseInt(event.value);
    this.getQuantityOfBloodPerMonth();
  }

  getQuantityOfBloodPerMonth() {
    if (this.year1 == null || this.bloodType == null) return;
    this.tenderBloodQuantityChart.destroy();
    this.tenderService
      .getQuantityOfBloodPerMonth(this.year1, this.bloodType)
      .subscribe((data) => {
        this.chart7_data = data;
        this.tenderBloodQuantityChart = new Chart('chart7', {
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
                label: 'Quantity of blood per month',
                data: this.chart7_data,
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
                text: 'Quantity of blood per month',
                padding: {
                  top: 10,
                },
              },
            },
          },
        });
      });
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  dto: DoctorOptionalStatisticDto;

  getDoctorOptionalBookingStatistic() {
    //console.log(this.doctor1);
    //console.log(this.range.value.start)
    //console.log(this.range.value.end)
    if (
      this.doctor == null ||
      this.range.value.start == null ||
      this.range.value.end == null
    )
      return;
    //console.log('nije returnovao')
    //let v = this.range.value.start.getDate();
    //console.log(v)
    //let labels = this.createLabels(this.range.value.start, this.range.value.end);
    //console.log(labels);
    this.dto = {
      doctorId: this.doctor,
      start: new Date(
        this.range.value.start.getTime() -
          this.range.value.start.getTimezoneOffset() * 60000
      ),
      end: new Date(
        this.range.value.end.getTime() -
          this.range.value.end.getTimezoneOffset() * 60000
      ),
    };
    this.doctorYearlyBookingChart.destroy();
    this.service
      .getDoctorOptionalBookingStatistics(this.dto)
      .subscribe((data) => {
        this.doctorOptionalBookingData = data;
        this.doctorYearlyBookingChart = new Chart('chart6', {
          type: 'line',
          data: {
            labels: this.createLabels(
              this.range.value.start,
              this.range.value.end
            ),
            datasets: [
              {
                label: this.createTitle(
                  this.range.value.start,
                  this.range.value.end
                ),
                data: this.doctorOptionalBookingData,
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
                text: this.createTitle(
                  this.range.value.start,
                  this.range.value.end
                ),
                padding: {
                  top: 10,
                },
              },
            },
          },
        });
      });
  }

  createLabels(start: Date | null | undefined, end: Date | null | undefined) {
    if (start != null && end != null) {
      if ((end.getTime() - start.getTime()) / (1000 * 3600 * 24) < 32) {
        let label = [];
        let j = start.getDate();
        for (
          let i = 0;
          i <= (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
          i++
        ) {
          label.push(j);
          if (
            (start.getMonth() % 2 === 0 && start.getMonth() < 7) ||
            (start.getMonth() % 2 != 0 && start.getMonth() > 6)
          ) {
            if (j < 31) {
              j++;
            } else {
              j = 1;
            }
          } else {
            if (
              (j < 28 && start.getMonth() === 1) ||
              (start.getMonth() != 1 && j < 30)
            ) {
              j++;
            } else {
              j = 1;
            }
          }
        }
        return label;
      } else {
        let label = [];
        let months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth();

        let j = start.getMonth() + 1;
        for (let i = 0; i <= months; i++) {
          label.push(j);
          if (j < 12) {
            j++;
          } else {
            j = 1;
          }
        }
        return label;
      }
    }
    return [];
  }

  createTitle(start: Date | null | undefined, end: Date | null | undefined) {
    if (start != null && end != null) {
      if ((end.getTime() - start.getTime()) / (1000 * 3600 * 24) < 32) {
        return 'Number of appointments per days';
      } else {
        return 'number of appointments per months';
      }
    }
    return '';
  }
}
