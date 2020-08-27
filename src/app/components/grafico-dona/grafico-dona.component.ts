import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [],
})
export class GraficoDonaComponent implements OnInit {
  @Input('chartLabels') doughnutChartLabels: string[] = [
    'Download Sales',
    'Jean',
    'Marco',
  ];
  @Input('chartData') doughnutChartData: number[] = [350, 450, 100];
  @Input('chartType') doughnutChartType: string = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
