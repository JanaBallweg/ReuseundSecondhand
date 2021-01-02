am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "Weiß nicht/keine Angabe",
	"percent": 1
}, {
	"reason": "Sonstiges",
	"percent": 3
}, {
	"reason": "Einzigartigkeit der Produkte",
	"percent": 19
}, {
	"reason": "Lieber gebrauchte produkte mit hoher Qualität",
	"percent": 24
}, {
	"reason": "Kauf nicht mehr verfügbaren Produkte",
	"percent": 34
}, {
	"reason": "Produkte, die man sich neu nie leisten kann",
	"percent": 36
}, {
	"reason": "Vermeidung unnötiger Resourcen",
	"percent": 42
}, {
	"reason": "Sparen beim Kauf",
	"percent": 56
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

series.fill = am4color.color("#AFC5C7");

