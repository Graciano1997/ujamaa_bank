const ctx = document.getElementById('myChart');
const polarGraph = document.getElementById('myChartPolar');
const mobile = document.getElementById('saldo');

const graphicBuilder= async ()=>{

  try{
    const response = await  fetch(`${ipClient}/api/conta/consultasaldo/${JSON.parse(localStorage.getItem("currentSession")).email}`);
    const dataConta = await response.json();
  
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Activo:',
          'Passivo:',
        ],
        datasets: [{
          label: 'Total (KZ)',
          data: [+dataConta.data.data.ativo, -dataConta.data.data.passivo],
          color: 'white',
          backgroundColor: [
            'blueviolet',
            'white',
          ],
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'SEU SALDO',
            color:'white'
          }
        }
      }, 
    });

    const responsePolar = await  fetch(`${ipClient}/api/operacao/op_totals/`);
    const dataContaPolarObject = await responsePolar.json();
    const dataContaPolar = dataContaPolarObject.data;
console.log(dataContaPolar);
    new Chart(polarGraph,{
      type:'polarArea',
      data: {
        labels: [
          'Transferências',
          'Levantamentos',
          'Creditos',
        ],
        datasets: [{
          label: 'Total (KZ)',
          data: [dataContaPolar.totalTransferencia, dataContaPolar.totalLevantamento, dataContaPolar.totalCredito],
          backgroundColor: [
            'rgba(53, 2, 53, 0.89)',
            'rgb(42, 24, 59)',
            'rgb(194, 131, 194)',
          ],
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'GRÁFICO DE RESUMO DAS OPERAÇÕES',
            color:'white'
          }
        }
      },  
    });
    
    // new Chart(mobile, {
    //   type: 'doughnut',
    //   data: {
    //     labels: [
    //       'Activo:',
    //       'Passivo:',
    //     ],
    //     datasets: [{
    //       label: 'Total (KZ)',
    //       data: [+dataConta.data.data.ativo, -dataConta.data.data.passivo],
    //       color: 'white',
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)'
    //       ],
    //       hoverOffset: 20
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'SALDO',
    //         color:'white'
    //       }
    //     }
    //   }, 
    // });
    
  }catch(error){
    console.error(error);
  }
  
};

graphicBuilder();