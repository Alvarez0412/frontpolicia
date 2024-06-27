var options = {
    chart: {
      type: 'line',
    },
    colors:['#008000'],
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  var options2 = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [10,40,35,100,49,60,100,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  
  chart2.render();