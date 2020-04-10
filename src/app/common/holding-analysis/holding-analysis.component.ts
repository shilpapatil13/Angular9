import {
  Component,
  OnInit, Input, ViewChild
} from '@angular/core';
import { Fund } from '../../models/fund';
import { NgStyle } from '@angular/common';
declare var $: any;
declare var Highcharts: any;

@Component({
  selector: 'app-holding-analysis',
  templateUrl: './holding-analysis.component.html',
  styleUrls: ['./holding-analysis.component.scss']
})
export class HoldingAnalysisComponent implements OnInit {
  @Input() fundDetails: Fund;
  constructor() {
    
  }
  
  ngOnInit() {
    if (this.fundDetails!=undefined) {
    $(function () {
      
      Highcharts.setOptions({
        colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
      });
      $('#pieChart').highcharts({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          marginBottom: 100,
          marginLeft: 100
        },
        legend: {
          useHTML: true,
          labelFormat: '<table><tr><td style="text-align: center;border-right: .5px;border-left: .5px; padding-left: 30px;">{name}</td><td style="text-align: center;border-right: .5px ;border-left: .5px ; padding-left: 30px;">{y}</td></tr></table>',
          align: 'right',
          verticalAlign: 'top',
          layout: 'vertical',
          x: 0,
          y: 110
        },
        title: {
          text: 'Equity Sector Allocation'
        },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            
            //depth: 45,
            //size: 220,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
            //  enabled: true,
              distance: -113,
              y: 0,
              format: "Rs 15995 Cr",
              style: {
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '14px'
              },
             //filter: {
                 // property: 'name',
                 // operator: '===',
//value: 'Technology'
              //},
            
            },
            showInLegend: true
          },
          series: {
            animation: false
          }
        },
        series: [{
          name: 'Brands',
          type: 'pie',
          //colorByPoint: true,
          innerSize: '50%',
          data: [{
            name: 'Services',
            y: 8.6
          }, {
            name: 'Others',
            y: 14.7
          }, {
            name: 'Technology',
            y: 10.4
          }, {
            name: 'Financial',
            y: 50.2
          }, {
            name: 'FMCG',
            y: 9.2
          }, {
            name: 'Chemicals',
            y: 6.8
          }]
        }]
      });
    });
  }
  }
}

