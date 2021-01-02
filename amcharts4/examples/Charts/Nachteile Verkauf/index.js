am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "Weiß nicht/keine Angabe",
	"percent": 17
}, {
	"reason": "Sonstiges",
	"percent": 7
}, {
	"reason": "Unwissen über das Wo und Wie des Verkaufes",
	"percent": 8
}, {
	"reason": "Verkauf an Fremde zu unsicher",
	"percent": 20
}, {
	"reason": "Kommunikation mit dem Käufer ist anstrengend",
	"percent": 31
}, {
	"reason": "Angst vor Betrug",
	"percent": 32
}, {
	"reason": "Unwissen über dan Wert und den Preis des Produkts",
	"percent": 34
}, {
	"reason": "Zeitaufwand",
	"percent": 49
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
series.tooltipText = "{valueX}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;


series.tooltipText = "{valueX}";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
chart.cursor.lineX.disabled = true;

series.fill = am4color.color("#F8A091");