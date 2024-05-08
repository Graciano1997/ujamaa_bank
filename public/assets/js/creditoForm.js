const creditoForm = document.querySelector("#creditoFormDados");
const creditoTipo = document.querySelector("#creditoTipo");
const creditoPrazo = document.querySelector("#creditoMes");
const creditoTaxaJuro = document.querySelector("#creditoTaxaJuro");
const creditoComicao = document.querySelector("#creditoComicao");
const creditoValor = document.querySelector("#creditoValor");
const updateLinks = document.querySelectorAll(".update-link");
const deleteLinks = document.querySelectorAll(".delete-link");
const creditoItems = document.querySelectorAll(".creditoDiv");
const recusarCredito = document.querySelector("#recusarCredito");
const aprovarCredito = document.querySelector("#aprovarCredito");
const inicioCreditoData = document.querySelector("#inicioCreditoData");
const fimCreditoData = document.querySelector("#fimCreditoData");
const creditoItemsEliminar = document.querySelectorAll("#creditoItemEliminar");
const creditoItemsAtualizar = document.querySelectorAll("#creditoItemAtualizar");
let creditoTipoId = '';

updateLinks.forEach(updateElement => {
  updateElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const creditoTipoId = el.target.getAttribute('data-id');
    const nome=el.currentTarget.parentNode.parentNode.firstChild.nextSibling.value;
    try {
      const response = await fetch(`${ipClient}/api/credito-tipos/${creditoTipoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        infoParaph.classList.remove('infoError');
        ////window.location.reload();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

deleteLinks.forEach(linkElement => {
  linkElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const creditoTipoId = el.target.getAttribute('data-id');
    try {
      const response = await fetch(`${ipClient}/api/credito-tipos/${creditoTipoId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      ////window.location.reload();
     } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});
creditoItems.forEach(credito => {
  credito.addEventListener("click", async (el) => {
    creditoTipoId = el.target.getAttribute('data-creditoId');
    try {
      if(creditoTipoId!==null){
        window.location.href=`${ipClient}/dashboard/creditos/${creditoTipoId}`
      }
     } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

if (creditoForm !== null) {
  creditoForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      const response = await fetch(`${ipClient}/api/credito-tipos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: creditoTipo.value,
          duracao:creditoPrazo.value,
          valor:creditoValor.value,
          comicao:creditoComicao.value,
          juro:creditoTaxaJuro.value
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        creditoTipo.value='';
        infoParaph.classList.remove('infoError');
        ////window.location.reload();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (recusarCredito !== null) {
  recusarCredito.addEventListener("click", async (el) => {
    try {
      el.preventDefault();
      const creditoItem=JSON.parse(document.querySelector("#recusarCredito").getAttribute("data-id"));
      console.log(creditoItem);
      const response = await fetch(`${ipServer}/api/credito_aprovacao/${creditoItem.creditoAprovacaoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          estado:"recusado",
          creditoId:creditoItem.creditoId,
          inicio:'Indefinido',
          fim:'Indefinido'
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;

      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        document.querySelector(".personalCredito").classList.remove('aceite');
        document.querySelector(".personalCredito").classList.add('recusado');
        creditoTipo.value='';
        infoParaph.classList.remove('infoError');
        //window.location.reload();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (aprovarCredito !== null) {
  aprovarCredito.addEventListener("click", async (el) => {
    try {
      el.preventDefault();
      const creditoItem=JSON.parse(document.querySelector("#aprovarCredito").getAttribute("data-id"));
      console.log(creditoItem);
      const response = await fetch(`${ipServer}/api/credito_aprovacao/${creditoItem.creditoAprovacaoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          estado:"aceite",
          creditoId:creditoItem.creditoId,
          inicio:inicioCreditoData.value,
          fim:fimCreditoData.value
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;

      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        document.querySelector(".personalCredito").classList.remove('recusado');
        document.querySelector(".personalCredito").classList.add('aceite');
        creditoTipo.value='';
        infoParaph.classList.remove('infoError');
        //window.location.reload();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

creditoItemsEliminar.forEach((creditoItemEliminar)=>{
  creditoItemEliminar.addEventListener('click', async(el)=>{
    el.preventDefault();
    const idCredito=el.target.getAttribute('data-id');
    const response = await fetch(`${ipServer}/api/credito-tipos/${idCredito}`,{
      method:'DELETE',
      headers: {'Content-Type':'application/json'}
    });
    
    const data = await response.json();
    console.log(data);
    infoParaph.textContent = data.message;
    if (data.error){
      infoParaph.classList.add('infoError');
    } else {
      infoParaph.classList.remove('infoError');
    }
  })
});

creditoItemsAtualizar.forEach((creditoItemAtualizar)=>{
  creditoItemAtualizar.addEventListener('click', async(el)=>{
    el.preventDefault();
    const idCredito=el.target.getAttribute('data-id');
    const grandParentNode=el.target.parentNode.parentNode;

    const creditoToUpdate={
      nome: grandParentNode.querySelector("#creditoItemNome").value,
      valor: grandParentNode.querySelector("#creditoItemValor").value,
      duracao: grandParentNode.querySelector("#creditoItemNumeroPrestacao").value,
      comicao: grandParentNode.querySelector("#creditoItemNumeroPrestacao").value,
      juro: grandParentNode.querySelector("#creditoItemTaxa").value,
    }
    console.log(creditoToUpdate);

    const response = await fetch(`${ipServer}/api/credito-tipos/${idCredito}`,{
       method:'PUT',
       headers: {'Content-Type':'application/json'},
       body:JSON.stringify(creditoToUpdate)
     });
    
     const data = await response.json();
     console.log(data);
     infoParaph.textContent = data.message;
     if (data.error){
       infoParaph.classList.add('infoError');
     } else {
       infoParaph.classList.remove('infoError');
     }
  });
});