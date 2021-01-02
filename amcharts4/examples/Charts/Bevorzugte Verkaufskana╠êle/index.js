am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.width = 500;

chart.data = [{
	"category": "",
	"Weiß nicht / keine Angabe": 2,
	"Verkauf online und offline": 15,
	"Verkauf offline": 5,
	"Verkauf online": 78
}]

chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";
chart.legend.contentAlign = "left";

// Modify chart's colors
chart.colors.list = [
	am4core.color("#7F7F7F"),
	am4core.color("#C9C9C9"),
	am4core.color("#689195"),
	am4core.color("#9DC3E7"),
  ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.cellStartLocation = -0.5;
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;
categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.renderer.minGridDistance = 20;
valueAxis.interactionsEnabled = false;
valueAxis.min = 0;
valueAxis.renderer.minWidth = 35;
valueAxis.renderer.grid.template.disabled = true;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(50);
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.name = "Weiß nicht / keine Angabe";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "Weiß nicht / keine Angabe";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(50);
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Verkauf online und offline";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "Verkauf online und offline";
series2.stacked = true;

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.columns.template.width = am4core.percent(50);
series3.columns.template.tooltipText = "{name}: {valueY.value}";
series3.name = "Verkauf offline";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "Verkauf offline";
series3.stacked = true;

var series4 = chart.series.push(new am4charts.ColumnSeries());
series4.columns.template.width = am4core.percent(50);
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Verkauf online";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "Verkauf onlines";
series4.stacked = true;

chart.responsive.enabled = true;


