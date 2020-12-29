am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
	"category": "Entsorgung unbenutzter Produkte",
	"Keine Entsorgung": 23,
	"Hausmüll oder Wertstoffhof": 42,
	"Verkauft": 46,
	"Verschenkt": 48
}]

chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

// Modify chart's colors
chart.colors.list = [
	am4core.color("#7F7F7F"),
	am4core.color("#C9C9C9"),
	am4core.color("#689195"),
	am4core.color("#9DC3E7"),
  ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.renderer.minGridDistance = 20;
valueAxis.interactionsEnabled = false;
valueAxis.min = 0;
valueAxis.renderer.minWidth = 35;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.name = "Keine Entsorgung";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "Keine Entsorgung";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Hausmüll oder Wertstoffhof";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "Hausmüll oder Wertstoffhof";
series2.stacked = true;

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText = "{name}: {valueY.value}";
series3.name = "Verkauft";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "Verkauft";
series3.stacked = true;

var series4 = chart.series.push(new am4charts.ColumnSeries());
series4.columns.template.width = am4core.percent(80);
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Verschenkt";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "Verschenkt";
series4.stacked = true;

