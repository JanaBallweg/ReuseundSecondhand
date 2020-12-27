am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  // Reduce saturation of colors to make them appear as toned down
  "colors": {
    "saturation": 1
  },

  // Setting data
  "data": [{
    "Kategorie": "Sonstiges",
    "Anteil": 9
  }, {
    "Kategorie": "Elektronische Großgerät (z.B. Kühlschränke)",
    "Anteil": 6
  }, {
    "Kategorie": "Fahrzeuge",
    "Anteil": 6
  }, {
    "Kategorie": "Fahrzeugteile & Zubehör",
    "Anteil": 8
  }, {
    "Kategorie": "Baby-/Kinderausstattung und -kleidung",
    "Anteil": 14
  }, {
    "Kategorie": "Musikinstrumente",
    "Anteil": 19
  }, {
    "Kategorie": "Dekoration, Möbel",
    "Anteil": 20
  }, {
    "Kategorie": "Sammlerstücke, Antiquitäten",
    "Anteil": 20
  }, {
    "Kategorie": "Werkzeuge, Gartengeräte, DIY-Zubehör",
    "Anteil": 23
  }, {
    "Kategorie": "Smartphones, Tablets",
    "Anteil": 25
  }, {
    "Kategorie": "Sportequipment",
    "Anteil": 26
  }, {
    "Kategorie": "Elektrogeräte (ink. PCs, Radios)",
    "Anteil": 27
  }, {
    "Kategorie": "Videospiele, Spielzeuge",
    "Anteil": 31
  }, {
    "Kategorie": "Fotoapparate & Zubehör",
    "Anteil": 34
  }, {
    "Kategorie": "Kleider, Schuhe, Accessoires",
    "Anteil": 57
  }, {
    "Kategorie": "Bücher",
    "Anteil": 58
  }, {
    "Kategorie": "CDs, DVDs, BlueRays",
    "Anteil": 62
  }
],

  // Add Y axis
  "yAxes": [{
    "type": "CategoryAxis",
    "renderer": {
      "minGridDistance": 20,
      "grid": {
        "disabled": true
      }
    },
    "dataFields": {
      "category": "Kategorie"
    }
  }],

  // Add X axis
  "xAxes": [{
    "type": "ValueAxis",
    "renderer": {
      
      // ...
      "grid": {
        "disabled": true
    }}
  }],

  // Add series
  "series": [{
    // Set type
    "type": "ColumnSeries",

    // Define data fields
    "dataFields": {
      "categoryY": "Kategorie",
      "valueX": "Anteil"
    },

    // Modify default state
    "defaultState": {
      "transitionDuration": 1000
    },

    // Set animation options
    "sequencedInterpolation": true,
    "sequencedInterpolationDelay": 100,

    // Modify color appearance
    "columns": {
      "fill":"#838097",
      // Disable outline
      "strokeOpacity": 0,
    }
  }],
  
}, "chartdiv", "XYChart");
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.disabled = true;
//chart.cursor.lineX.disabled = true;




