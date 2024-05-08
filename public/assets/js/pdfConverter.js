script>
      document.getElementById('btnExportar').addEventListener('click', function() {
          const element = document.querySelector('.utilizadorContainer');
          element.style.backgroundColor='purple';
          element.style.color='white';
          html2pdf().from(element).set({
    filename: 'Dados_do_Usuario.pdf',
    fileTitle:'Dado do Utilizador',
    margin: [20, 5, 20, 5], // Specify margins: top, right, bottom, left
    pagebreak: { mode: 'avoid-all' }, // Avoid page breaks inside content,
    page: {
            size: 'A4', // A4 size
            orientation: 'landscape', // portrait ,'landscape' for landscape orientation
            // margin: [10, 20, 30, 40] // top, right, bottom, left
        }
}).save();

      });
      </script>