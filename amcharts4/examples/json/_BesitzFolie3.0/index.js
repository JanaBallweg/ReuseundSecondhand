// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [{
  "Art": "Keine Entsorgung",
  "Prozentzahl": 23
}, {
  "Art": "Hausmüll oder Wertstoffhof",
  "Prozentzahl": 42
}, {
  "Art": "Verschenken",
  "Prozentzahl": 48
}, {
  "Art": "Verkauf",
  "Prozentzahl": 46
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "Prozentzahl";
pieSeries.dataFields.category = "Art";



pieSeries.colors.list = [
  am4core.color("#7F7F7F"),
  am4core.color("#C9C9C9"),
  am4core.color("#9DC3E7"),
  am4core.color("#689195"),
];