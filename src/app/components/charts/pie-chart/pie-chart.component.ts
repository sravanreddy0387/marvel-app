import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges  {

  @Input() commics: number;
  @Input() series: number;
  constructor() { }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: '#fff',
        fontSize: 16,
      },
      position: 'right',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData: number[] = []
  public pieChartColors = [
    {
      backgroundColor: ['#3f8ca8', '#78b29a'],
    },
  ];

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const comics: SimpleChange = changes.commics;
    const series: SimpleChange = changes.series;
    this.pieChartData = [comics.currentValue, series.currentValue];
    this.pieChartLabels =  [['Comics', comics.currentValue], ['Series', series.currentValue]];
  }

}
