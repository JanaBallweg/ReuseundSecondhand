//am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{ 
	"reason": "Sonstiges",
	"percent": 9
}, { 
	"reason": "Elektronische Großgeräte (z.B. Kühlschränke)",
	"percent": 6
},	{
	"reason": "Fahrzeuge",
	"percent": 6
}, {
	"reason": "Fahrzeugteile & Zubehör",
	"percent": 8
}, {
	"reason": "Baby-/Kinderausstattung und -kleidung",
	"percent": 14
}, {
	"reason": "Musikinstrumente",
	"percent": 19
}, {
	"reason": "Dekoration, Möbel",
	"percent": 20
},{
	"reason": "Sammlerstücke, Antiquitäten",
	"percent": 20
},{
	"reason": "Werkzeuge, Gartengeräte, DIY-Zubehör",
	"percent": 23
}, {
	"reason": "Smartphones, Tablets",
	"percent": 25
}, {
	"reason": "Sportequipment",
	"percent": 26
}, {
	"reason": "Elektrogeräte (ink. PCs, Radios)",
    "percent": 27
}, {
	"reason": "Videospiele, Spielzeuge",
    "percent": 31
}, {
	"reason": "Fotoapparate & Zubehör",
    "percent": 34
}, {
	"reason": "Kleider, Schuhe, Accessoires",
    "percent": 57
}, {
	"reason": "Bücher",
    "percent": 58
}, {
	"reason": "CDs, DVDs, BlueRays",
    "percent": 62
}];


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "reason";
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
series.fill = am4core.color("#838097");

series.tooltipText = "{valueX}";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
chart.cursor.lineX.disabled = true;

chart.responsive.enabled = true;
