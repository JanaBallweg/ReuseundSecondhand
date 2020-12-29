/**
 * This is a demo for PieChart.
 *
 * Demo uses JSON-based config.
 *
 * Refer to the following link(s) for reference:
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/pie-chart/}
 * @see {@link https://www.amcharts.com/docs/v4/concepts/json-config/}
 */

// Set theme
am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.createFromConfig({
  // Set inner radius
  "innerRadius": "40%",

  // Set data
  "data": [{
    "Wert": "<100 €",
    "Prozentzahl": 12
  }, {
    "Wert": "100-249 €",
    "Prozentzahl": 16
  }, {
    "Wert": "250-499 €",
    "Prozentzahl": 19
  }, {
    "Wert": "500-999€",
    "Prozentzahl": 15
  }, {
    "Wert": "1.000-2.499 €",
    "Prozentzahl": 13
  }, {
    "Wert": "2.500-4.999 €",
    "Prozentzahl": 5
  }, {
    "Wert": "5.000 € oder mehr",
    "Prozentzahl": 4
  }, {
    "Wert": "Weiß nicht/keine Angabe",
    "Prozentzahl": 16
  }],

}, "chartdiv", "PieChart");

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "Prozentzahl";
pieSeries.dataFields.category = "Wert";

pieSeries.colors.list = [
  am4core.color("#5F5F5F"),
  am4core.color("#A6A6A6"),
  am4core.color("#99D5DB"),
  am4core.color("#56787D"),
  am4core.color("#2B3C3E"),
  am4core.color("#62795E"),
  am4core.color("#87A682"),
  am4core.color("#9EC398"),
];
