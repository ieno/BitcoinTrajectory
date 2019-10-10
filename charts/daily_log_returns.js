const chart = new Chart('Daily Log Returns', [
    {
      name: 'Market price (USD)',
      jsonPath: '../data/price.json',
      style: {stroke: GOLD, strokeWidth: '2px'},
      transition: {ease: d3.easeLinear, delay: 0, duration: 3000}
    }
  ]);

const bottomChart = new BottomChart('Log Returns', [
  {
    name: 'Daily log returns',
    jsonPath: '../data/normalized/daily_log_returns.json',
    style: {stroke: BLUE_GREEN, strokeWidth: '1px'},
    transition: {ease: d3.easeLinear, delay: 0, duration: 3000}
  }
]);
chart.show([0.01, 50000], [0, 30000]);

bottomChart.show([-1, 1]);
chart.setBottomChart(bottomChart);
d3.select('xZoomRect').raise();