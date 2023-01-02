import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { StatisticsService } from '../../Services/statistics.service';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-renovation-statistics',
  templateUrl: './renovation-statistics.component.html',
  styleUrls: ['./renovation-statistics.component.scss']
})
export class RenovationStatisticsComponent implements OnInit {
  
  averageScheduleDurationChartData: any = []
  averageDurationChart: any  = [];


  constructor(private statisticsService: StatisticsService, private elementRef: ElementRef){
    Chart.register(...registerables);
    Chart.register(annotationPlugin);
  }
  
  ngOnInit(): void {
    this.statisticsService.getAverageRenovationSchedulingDuration().subscribe(data => {
      this.averageScheduleDurationChartData = data
      this.createAverageScheduleDurationChartByGroups()
    })
  }
  averageSchedulingDuration: any = [];

  average() {
    let average = 0
    for(let i = 0; i < this.averageScheduleDurationChartData.length; i++){
      average += this.averageScheduleDurationChartData[i]
    }
    return average/this.averageScheduleDurationChartData.length
  }

  horizontalDottedLine = {
    id: 'horizontalDottedLine',
    beforeDatasetsDraw(chart : any, args: any, options: any) {
      const {ctx, chartArea : { top, right, bottom, left, width, height},
        scales: {x, y}} = chart
        ctx.save();
        ctx.setLineDash([50, 10])
        ctx.strokeStyle = 'grey'
        ctx.strokeRect(left, y.getPixelForValue(10), width, 0)
        ctx.restore();

    }
  }

  createAverageScheduleDurationChartByGroups(){
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
            borderWidth: 3,
          }
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
          annotation: {
            autocolors: false,
            annotations: {
              line1: {
                type: 'line',
                yMin: this.average(),
                yMax: this.average(),
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 2,
              }
            }
          }
        },
      } as ChartOptions,
    });
  }
}
