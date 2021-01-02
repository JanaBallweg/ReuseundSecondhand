am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "Weiß nicht/keine Angabe",
	"percent": 6
}, { 
	"reason": "Sonstiges",
	"percent": 2
},	{
	"reason": "Gebraucht-Kauf nur für Leute, die sich etwas Neues nicht leisten können",
	"percent": 4
}, {
	"reason": "Die Kommunikation mit dem Verkäufer ist anstrengend",
	"percent": 8
}, {
	"reason": "Keine breite Auswahl",
	"percent": 9
}, {
	"reason": "Suche ist aufwendig",
	"percent": 14
}, {
	"reason": "Ich fühle mich wohler mit neuen Produkten",
	"percent": 17
},{
	"reason": "Bedenken über Hygiene",
	"percent": 21
},{
	"reason": "Keine Angaben über vorherige Nutzung",
	"percent": 33
}, {
	"reason": "Bedenken, ob Produkte sind wie beschrieben siend",
	"percent": 34
}, {
	"reason": "Bedenken bei der Vertrauenswürdigkeit des Verkäufers",
	"percent": 46
}, {
	"reason": "Ungewissheit über die Funktionalität der Produkte",
	"percent": 52
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

















