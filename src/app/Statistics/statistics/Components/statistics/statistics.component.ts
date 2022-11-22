import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../Services/statistics.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  appointmentChart: any = []
  patientChart: any = []
  agePyramid: any = []
  usersChart: any = []
  currentTab: number = 0
  max: number = 0

  constructor(private service: StatisticsService) {
    Chart.register(...registerables);
  }


  getMax(data: [], data1: []) {
    let max = 0
    data.forEach(element => {
      if (element > max) max = element
    });
    data1.forEach(element => {
      if (element > max) max = element
    });
    return max;
  }

  negateArray(data: []) {
    let returnArray: number[] = []
    data.forEach(element => {
      returnArray.push(element * -1)
    });
    return returnArray
  }

  chart_data: any = []

  ngOnInit(): void {
    this.service.getStatistics().subscribe((data) => {
      this.chart_data = data
      this.max = this.getMax(this.chart_data.chart3Male, this.chart_data.chart3Female)
      this.chart_data.chart3Female = this.negateArray(this.chart_data.chart3Female)

      this.appointmentChart = new Chart('chart1', {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Number of appointments per month',
            data: this.chart_data.chart1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              color: 'gray',
              display: true,
              font: {
                size: 20
              },
              text: 'Number of appointments per month',
              padding: {
                top: 10,
              }
            }
          }
        }
      });
      this.patientChart = new Chart('chart2', {
        type: 'bar',
        data: {
          labels: this.chart_data.chart2Names,
          datasets: [{
            label: 'Patients per doctor',
            data: this.chart_data.chart2Values,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
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
                size: 20
              },
              padding: {
                top: 10,
              }
            }
          }
        }
      });
      this.agePyramid = new Chart('chart3', {
        type: 'bar',
        data: {
          labels: ['60+', '45-60', '35-45', '25-35', '15-25', "0-15"],
          datasets: [{
            label: 'Male patients',
            data: this.chart_data.chart3Male,
            backgroundColor: ['rgba(108, 160, 220, 1)'],
            borderColor: ['rgba(72, 61, 219, 1)'],
            borderWidth: 3,
            borderRadius: 5
          },
          {
            label: 'Female patients',
            data: this.chart_data.chart3Female,
            backgroundColor: ['rgba(255, 192, 183, 1)'],
            borderColor: ['rgba(245, 153, 140, 1)'],
            borderWidth: 3,
            borderRadius: 5
          }]
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
                  return Math.abs(value as number)
                }
              }
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
                  return `${context.dataset.label} ${Math.abs(context.raw as number)}`
                }
              }
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
                      index: index
                    };
                  })
                }
              },
              title: {
                color: 'gray',
                display: true,
                text: 'Age pyramid',
                font: {
                  size: 20,
                  weight: 'bold'
                },
                padding: {
                  top: 10,
                }
              }
            }
          }
        }
      });
      this.usersChart = new Chart('chart4', {
        type: 'pie',
        data: {
          labels: ['Patient', 'General doctor', 'Neurologist', 'Cardiologist'],
          datasets: [{
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
            borderWidth: 3
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
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
                  weight: 'bold'
                },
                padding: {
                  top: 10,
                }
              }
            }
          }
        }
      });
    })
  }
}

