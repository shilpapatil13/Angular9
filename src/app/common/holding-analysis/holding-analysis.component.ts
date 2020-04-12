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
          plotBorderWidth: 0,
          plotShadow: false,
          type: 'pie',
          marginBottom: 100,
          marginLeft: 100
        },
        legend: {
          useHTML: true,
          labelFormatter: function() {
                return '<div style=" display: flex;-webkit-box-align: center; '
                +'position: relative;margin-bottom: 15px; ">'
                +'<div style="color:#000000,font-size:12px !important; width:150px">'
                +'<b>'+ this.name + '</b></div><div style="color:#000000,font-size:12px position: absolute;top: 0;right: -95px;!important;">'+this.y+'%</div></div>'; 
        },	
          align: 'right',
          verticalAlign: 'top',
          layout: 'vertical',
          x: 0,
          y: 105
        },
        title: {
          text: 'Equity Sector Allocation',
          x: -60

        },
        subtitle: {
          text: 'Rs 15995 Cr',
          x:-67,
          y:180,
          style: {
            fontWeight: 'bold'
        }
      },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false,
            },
            showInLegend: true
          },
          series: {
            animation: false
          }
        },
        series: [{
          name: '',
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

