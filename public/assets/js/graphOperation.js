const moviments = document.getElementById('myChartCard');

const graphicBuildeMoviments = async () => {
  const response = await fetch(`${ipClient}/api/operacao/op_total_geral`);
  const responseObject = await response.json();
  const graphicData = await responseObject.data;
  const inArray = [];
  const outputArray = [];

  for (const entrada in graphicData.entrada) {
    inArray[parseInt(entrada)-1] = graphicData.entrada[entrada];
  }

  for (const saida in graphicData.saida) {
    outputArray[parseInt(saida)-1] = graphicData.saida[saida];
  }

  console.log("Grafico das entradas", inArray);
  console.log("Grafico das Saidas", outputArray);
  try {
    new Chart(moviments, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          label: 'Saida (KZ)',
          data: outputArray,
          fill: false,
          borderColor: 'purple',
          tension: 0.4
        },
        {
          label: 'Entrada (KZ)',
          data: inArray,
          fill: false,
          borderColor: 'green',
          tension: 0.4
        }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'GRÁFICO DAS ENTRADAS E SAIDAS MENSAL',
            color: 'black'
          }
        }
      },
    });

  } catch (error) {
    console.error(error);
  }
};
if (moviments !== null) {
  graphicBuildeMoviments();
}