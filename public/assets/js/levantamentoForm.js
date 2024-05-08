
const levantamentoForm = document.querySelector("#levantamentoFormContainer");
const quantidadeDinheiro = document.querySelector("#quantidadeDinheiro");
const codigo = document.querySelector("#codigoSecretoField");
const yesNoContainerBtnYes = document.querySelector(".yesNoContainerBtnYes");
const infoLevantamento = document.querySelector(".infoLevantamento");

if (levantamentoForm !== null) {
  levantamentoForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
        const response = await fetch(`${ipClient}/api/operacao/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              valor: quantidadeDinheiro.value,
              code: codigo.value,
              destinatario:null,
              transacaoId:1, 
              feito:false
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
        }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (yesNoContainerBtnYes !== null) {
  yesNoContainerBtnYes.addEventListener("click", async (el) => {
    try {
        const operationId = yesNoContainerBtnYes.getAttribute('data-operation');
        const response = await fetch(`${ipClient}/api/operacao/cancelar/`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                operationId: operationId,
            })
        });
        const data = await response.json();
        infoLevantamento.textContent = data.message;
        //  if (data.error) {
        //    infoLevantamento.classList.add('infoError');
        //  } else {
        //    infoLevantamento.classList.remove('infoError');
        //  }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

