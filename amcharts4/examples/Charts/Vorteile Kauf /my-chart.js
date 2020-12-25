var myChartObject = document.getElementById('myChart');

var chart= new Chart (myChartObject,{
    type: 'line',
    data:{
        labels:["Januar", "Februar", "März", "April"],
        datasets:[{
            label: "Datensatz Nr. 1",
            backgroundColor: rgba(65,105,225,0.4),
            data: [3,7,5,6]
        }]
    }
})
