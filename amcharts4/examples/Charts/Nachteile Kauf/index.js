am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "weiß nicht/keine Angabe",
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
	"perzent": 42
}, {
	"reason": "Sparen beim Kauf",
	"percent": 56
}];


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "reason";
categoryAxis.renderer.minGridDistance = 20;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "reason";
series.dataFields.valueX = "percent";
series.tooltipText = "{valueX.value}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;




// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
	return chart.colors.getIndex(target.dataItem.index);
});