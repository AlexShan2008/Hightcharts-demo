/**
 * Created by ShanGuo on 2017/8/12.
 */
var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

// Create the chart
Highcharts.chart('container', { /*Highcharts options*/ });
