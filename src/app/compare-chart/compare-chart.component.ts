import { Component, OnInit, Input } from '@angular/core';
import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
declare var $: any;
declare var Highcharts: any;
@Component({
  selector: 'compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.scss']
})
export class CompareChartComponent implements OnInit {

  @Input() parentSubject: Subject<any>;
  showChartContainer: Boolean = false;
  fundDetails: any;
  selectedVal: any;
  constructor() { }
  ngOnInit(): void {
    this.selectedVal = '1';

    this.parentSubject.subscribe(event => {
      this.fundDetails = event;
      //  console.log('called when the notifyChildren method is', event);
      if (event.length != 0) {
        this.updateChart(event);
        this.showChartContainer = true;
      }
      else {
        this.showChartContainer = false;
        var chart = $("#chartcontainer").highcharts();
        chart ? chart.destroy() : 'alert(something went wrong)'
      }
    });

  }
  updateChart(event) {
    this.selectedVal = '1';

    var chartOptions = {
      chart: {
        type: 'spline',
        marginTop: 150,
        margin: 0,
        renderTo: 'chartcontainer',
      },
      title: {
        text: 'Performance Graph',
        style: {
          fontSize: '20px',
          fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
          fontWeight: '500'
        },
        align: 'left',
      },
      legend: {
        align: 'right',
        display: 'flex',
        verticalAlign: 'top',
        layout: 'vertical',
        itemMarginTop: 5,

      },
      tooltip: {
        useHTML: true,
        borderColor: '{series.color}',
        shared: true,
        split: true,
        borderRadius: 10,
        borderWidth: 3,
        xDateFormat: '%d-%b-%Y',
        pointFormatter: function () {
          var point = this,
            series = point.series,
            legendSymbol = "<svg width='20' height='20'>" + series.legendSymbol.element.outerHTML + "</svg>";
          return '<span style="margin:auto">' + legendSymbol + '<b>NAV:<b> ' + point.y + '</b></span><br/>';
        }
      },
      xAxis: {
        visible: false,
        useHTML: true,
        type: 'datetime',
        minPadding: 0.05,
        maxPadding: 0.05
      },
      yAxis: {
        useHTML: true,
        visible: false
      },
      // series: [{
      // }]
    };
    $(function () {
      var chart1 = new Highcharts.Chart(chartOptions);
      let colormap = { 2: '#0000A0', 1: '#9400D3', 0: '#00d09c' };

      //console.log(event[0]['chartData'][0]['1Y'])
      if (chart1) {
        for (let i = 0; i < event.length; i++) {
          var legendtitle = event[i]['name'] + ' (' + event[i]['oneYear'] + ') '
          chart1.addSeries({
            name: legendtitle,
            data: event[i]['chartData'][0]['1Y'],
            color: colormap[i]
          });
        }
        chart1.redraw();
      }
    });
  }

  plotSeriesData(data, year) {
    let yearmap = { 1: '1Y', 3: '3Y', 5: '5Y' };
    let titleyearmap = { 1: 'oneYear', 3: 'threeYears', 5: 'fiveYears' };

    //console.log(yearmap[year])
    var chart2 = $("#chartcontainer").highcharts();
    if (chart2) {
      for (let i = 0; i < this.fundDetails.length; i++) {
        var legendtitle = this.fundDetails[i]['name'] + ' (' + this.fundDetails[i][titleyearmap[year]] + ') '
        chart2.series[i].update({ name: legendtitle });
        chart2.series[i].setData(this.fundDetails[i]['chartData'][0][yearmap[year]])
      }
    }
  }
  onValChange(event) {
    this.selectedVal = event;
    this.plotSeriesData(this.fundDetails, event)
  }


}
