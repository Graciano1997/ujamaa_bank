
const transferenciaForm = document.querySelector("#transferenciaForm");
const transferenciaRapidaForm = document.querySelector("#transferenciaRapidaForm");
const destinatario = document.querySelector("#ibanField");
const contaNumeroDestinatario = document.querySelector("#contaNumeroDestinatario");
const quantidadeDinheiroTransferir = document.querySelector("#valorField");
const valorDestinatario = document.querySelector("#valorDestinatario");

if (transferenciaForm !== null) {
  transferenciaForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
        const response = await fetch(`${ipClient}/api/operacao/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              valor: quantidadeDinheiroTransferir.value,
              destinatario:destinatario.value,
              transacaoId:2,
              // feito:true
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
          transferenciaForm.reset();
        }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });

}
  if (transferenciaRapidaForm !== null) {
    transferenciaRapidaForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
        const response = await fetch(`${ipClient}/api/operacao/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              valor: valorDestinatario.value,
              destinatario:contaNumeroDestinatario.value,
              transacaoId:2,
              feito:false
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
          transferenciaRapidaForm.reset();
        }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}