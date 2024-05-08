const transacaoForm = document.querySelector("#transacaoFormDados");
const transacaoNome = document.querySelector("#transacaoNome");
const transacaoNomeField = document.querySelector("#transacaoNomeField");
const updateLinks = document.querySelectorAll(".update-link");
const deleteLinks = document.querySelectorAll(".delete-link");

updateLinks.forEach(updateElement => {
  updateElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const transacaoTipoId = el.target.getAttribute('data-id');
    const nome = el.currentTarget.parentNode.parentNode.firstChild.nextSibling.value;
    try {
      const response = await fetch(`${ipServer}/api/transacao/${transacaoTipoId}`, {
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
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

deleteLinks.forEach(linkElement => {
  linkElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const transacaoId = el.target.getAttribute('data-id');
    try {
      const response = await fetch(`${ipServer}/api/transacao/${transacaoId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      // if (data.error) {
      //   infoParaph.classList.add('infoError');
      // } else {
      //   infoParaph.classList.remove('infoError');
      // }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

if (transacaoForm !== null) {
  transacaoForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      const response = await fetch(`${ipServer}/api/transacao/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: transacaoNome.value,
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        // transacaoNome.value = '';
        transacaoForm.reset();
        infoParaph.classList.remove('infoError');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}