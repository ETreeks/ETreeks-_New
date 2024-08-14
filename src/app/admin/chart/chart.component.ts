import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/Services/chart.service';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  implements OnInit {
  public chart: any;
 
 
 
  constructor(private chartService: ChartService) { }
  ngOnInit(): void {
    this.loadChart();
  }
 
  loadChart(): void {
    Promise.all([
      this.chartService.getCountStudents().toPromise(),
      this.chartService.getCountTrainers().toPromise(),
      this.chartService.getCountAdmin().toPromise()
    ]).then(([students, trainers, admins]) => {
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['Students', 'Trainers', 'Admins'],
          datasets: [
            {
              label: 'Number of Users',
              data: [students, trainers, admins],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}