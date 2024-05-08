const ctxSaldo = document.getElementById('saldoChart');
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

// const labels = Utils.months({count: 7});
const data={
  datasets: [
    {
      label: 'Dataset 1',
      data: [20,500],
      borderColor: 'red',
      backgroundColor: 'green',
    },
    {
      label: 'Dataset 2',
      data: [20,3,200],
      borderColor: 'blue',
      backgroundColor: 'pink',
    }
  ]
}

new Chart(ctxSaldo,{
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
});
