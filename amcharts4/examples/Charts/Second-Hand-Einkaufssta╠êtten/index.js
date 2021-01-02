am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "Weiß nicht/keine Angabe",
	"percent": 4
}, {
	"reason": "Habe in den letzten 12 Monaten keine gebrauchten Waren gekauft",
	"percent": 40
}, {
	"reason": "Sonstiges",
	"percent": 4
}, {
	"reason": "Pfandhaus",
	"percent": 1
}, {
	"reason": "Kleinanzeigen in Zeitungen",
	"percent": 4
}, {
	"reason": "Gebruachtwarenladen mit wohltätigem Hintergrund",
	"percent": 6
}, {
	"reason": "Sonstige Webseite",
	"percent": 7
}, {
	"reason": "Sonstige Kleinanzeigen-Portale im Internet",
	"percent": 7
}, {
	"reason": "Freunde/Familie",
	"percent": 8
}, {
	"reason": "Flohmarkt/Garagen Verkauf",
	"percent": 11
}, {
	"reason": "Ebay/Ebay Kleinanzeigen",
	"percent": 45
}];


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "reason";
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.disabled = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "reason";
series.dataFields.valueX = "percent";
series.tooltipText = "{valueX.value}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;




series.tooltipText = "{valueX}";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
chart.cursor.lineX.disabled = true;

series.fill = am4color.color("#F8A091");
