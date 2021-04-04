Highcharts.stockChart('chart-high', {
  chart: {
    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0];
        var yBase = Math.round(valueFields.toMask.unmaskedValue);
        setInterval(function () {
          var x = new Date().getTime(), // current time
            y = Math.round(valueFields.toMask.unmaskedValue);

          if (y != 0) {
            if (yBase != y) {
              series.addPoint([x, y], true, false);
              yBase = y;
            }
          }
        }, 1000);
      },
    },
  },

  time: {
    useUTC: false,
  },

  rangeSelector: {
    buttons: [
      {
        count: 1,
        type: 'minute',
        text: '1M',
      },
      {
        count: 5,
        type: 'minute',
        text: '5M',
      },
      {
        type: 'all',
        text: 'All',
      },
    ],
    inputEnabled: false,
    selected: 2,
  },

  title: {
    text: 'Valor em Reais',
  },

  exporting: {
    enabled: false,
  },

  series: [
    {
      name: 'Valor em Reais',
      data: [
        (function () {
          // generate an array of random data
          var data = [];
          return data;
        })(),
      ],
    },
  ],
});
