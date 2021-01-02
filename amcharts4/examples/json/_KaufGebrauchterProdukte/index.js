// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

 // Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "Kategorie": '"Musikinstrumente"',
  "Bevorzugt gebraucht gekauft": 3,
  "Bereits gebraucht gekauft": 5
},{
  "Kategorie": "Sportequipment",
  "Bevorzugt gebraucht gekauft": 4,
  "Bereits gebraucht gekauft": 5
},{
  "Kategorie": "Fotoapparate & Zubehör",
  "Bevorzugt gebraucht gekauft": 3,
  "Bereits gebraucht gekauft": 5
},{
  "Kategorie": "Elektronische Großgeräte",
  "Bevorzugt gebraucht gekauft": 5,
  "Bereits gebraucht gekauft": 7
},{
  "Kategorie": "Fahrzeugteile & -zubehör",
  "Bevorzugt gebraucht gekauft": 4,
  "Bereits gebraucht gekauft": 8
}, {
  "Kategorie": "Werkzeuge, Gartengeräte & DIY-Zubehör",
  "Bevorzugt gebraucht gekauft": 7,
  "Bereits gebraucht gekauft": 8
}, {
  "Kategorie": "Baby-/Kinderausstattung & -kleidung",
  "Bevorzugt gebraucht gekauft": 8,
  "Bereits gebraucht gekauft": 9
}, {
  "Kategorie": "Elektrogeräte (inkl. PCs, Radios)",
  "Bevorzugt gebraucht gekauft": 8,
  "Bereits gebraucht gekauft": 11
}, {
  "Kategorie": "Smartphones, Tablets",
  "Bevorzugt gebraucht gekauft": 9,
  "Bereits gebraucht gekauft": 13
}, {
  "Kategorie": "Sammlerstücke, Antiquitäten",
  "Bevorzugt gebraucht gekauft": 16,
  "Bereits gebraucht gekauft": 16
}, {
  "Kategorie": "Videospiele, Spielzeuge",
  "Bevorzugt gebraucht gekauft": 14,
  "Bereits gebraucht gekauft": 20
}, {
  "Kategorie": "Dekoration, Möbel",
  "Bevorzugt gebraucht gekauft": 14,
  "Bereits gebraucht gekauft": 20
}, {
  "Kategorie": "Kleidung, Schuhe, Accessoires",
  "Bevorzugt gebraucht gekauft": 19,
  "Bereits gebraucht gekauft": 24
}, {
  "Kategorie": "Fahrzeuge",
  "Bevorzugt gebraucht gekauft": 15,
  "Bereits gebraucht gekauft": 25
}, {
  "Kategorie": "CDs, DVDs, BlueRays",
  "Bevorzugt gebraucht gekauft": 23,
  "Bereits gebraucht gekauft": 30
}, {
  "Kategorie": "Bücher",
  "Bevorzugt gebraucht gekauft": 55,
  "Bereits gebraucht gekauft": 54
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Kategorie";


categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.5;
categoryAxis.renderer.grid.template.disabled = true;

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
valueAxis.renderer.grid.template.disabled = true;

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "Kategorie";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;
}

chart.colors.list = [
  am4core.color("#F8A091"),
  am4core.color("#FF7159"),
];

// Legende
chart.legend = new am4charts.Legend();

createSeries("Bevorzugt gebraucht gekauft", "Bevorzugt gebraucht gekauft");
createSeries("Bereits gebraucht gekauft", "Bereits gebraucht gekauft");
