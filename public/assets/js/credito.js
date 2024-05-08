
const clienteFormCredito = document.querySelector("#clienteFormCredito");
const creditoSolicitarBtnSave = document.querySelector("#creditoSolicitarBtnSave");
const clienteEstatuto = document.querySelector("#clienteEstatuto");
const clienteNumeroFilho = document.querySelector("#clienteNumeroFilho");
const clienteRendimentoAnualBruto = document.querySelector("#clienteRendimentoAnualBruto");
const clientePatrimonioLiquido = document.querySelector("#clientePatrimonioLiquido");
const clienteTel2 = document.querySelector("#clienteTel2");
// const clienteCasaPropria = document.querySelector("#clienteCasaPropria");
const creditoTipoId = document.querySelector("#creditoTipoId");
const infoCredito = document.querySelector(".infoCredito");
let clientevalorDesejado = document.querySelector("#clientevalorDesejado");
let clientecomicaoDesejado = document.querySelector("#clientecomicaoDesejado");
let clienteTotalPagar = null;
let taxaCredito = document.querySelector("#creditoTaxa").textContent;
document.querySelector("#simulador").addEventListener("click",(el)=>{
  window.location.href="/creditos#formSimulador";
});

if (creditoSolicitarBtnSave !== null) {
  creditoSolicitarBtnSave.addEventListener("click", async (el) => {
    try {
      // el.preventDefault();
        const dataCredito={
          quantidade:clientevalorDesejado.value,
          creditoTipoId:creditoTipoId.value,
          numero_comicao:clientecomicaoDesejado.value,
        }
 
        const responseCredito = await fetch(`${ipClient}/api/creditos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataCredito)
         });
        // const data = await response.json();
        const data1 = await responseCredito.json();
        infoParaph.textContent =`${data1.message}`;
        if (data1.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
          el.reset();
          // window.location.reload();
        }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

clientecomicaoDesejado.addEventListener("input",(el)=>{
  clientecomicaoDesejado.value=el.target.value;
  document.querySelector("#prestacaoPagar").textContent=clientecomicaoDesejado.value;
document.querySelector("#prestacaoPagarMeses").textContent=clientecomicaoDesejado.value;
clienteTotalPagar=(clientevalorDesejado.value*1 + clientevalorDesejado.value*(taxaCredito/100));
document.querySelector("#valorPagarMensal").textContent=(clienteTotalPagar/clientecomicaoDesejado.value).toFixed(2) + 'KZ';
document.querySelector("#valorPagarTotal").textContent=(clienteTotalPagar).toFixed(2) + 'KZ';
if(clientecomicaoDesejado.value>1){
  document.querySelector("#mesesUteis").textContent="meses úteis";
}else{
  document.querySelector("#mesesUteis").textContent="mês útil";
}
});

clientevalorDesejado.addEventListener("input",(el)=>{
  clientevalorDesejado.value=el.target.value;
  document.querySelector("#valorReceber").textContent=clientevalorDesejado.value + 'KZ';
document.querySelector("#valorPagar").textContent=clientevalorDesejado.value + 'KZ';
clienteTotalPagar=(clientevalorDesejado.value*1 + clientevalorDesejado.value*(taxaCredito/100));
document.querySelector("#valorPagarMensal").textContent=(clienteTotalPagar/clientecomicaoDesejado.value).toFixed(2) + 'KZ';
document.querySelector("#valorPagarTotal").textContent=(clienteTotalPagar).toFixed(2) + 'KZ';
});

if(clientecomicaoDesejado.value>1){
  document.querySelector("#mesesUteis").textContent="meses úteis";
}else{
  document.querySelector("#mesesUteis").textContent="mês útil";
}

document.querySelector("#prestacaoPagar").textContent=clientecomicaoDesejado.value;
document.querySelector("#prestacaoPagarMeses").textContent=clientecomicaoDesejado.value;
document.querySelector("#valorReceber").textContent=clientevalorDesejado.value + 'KZ';
document.querySelector("#valorPagar").textContent=clientevalorDesejado.value + 'KZ';
document.querySelector("#valorPagarMensal").textContent=clientevalorDesejado.value* + 'KZ';
clienteTotalPagar=(clientevalorDesejado.value*1 + clientevalorDesejado.value*(taxaCredito/100));
document.querySelector("#valorPagarTotal").textContent=(clienteTotalPagar).toFixed(2) + 'KZ';
document.querySelector("#valorPagarMensal").textContent=(clienteTotalPagar/clientecomicaoDesejado.value).toFixed(2) + 'KZ';
