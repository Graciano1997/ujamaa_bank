const contaForm = document.querySelector("#contaFormDados");
const contaTipo = document.querySelector("#contaTipo");
const updateLinks = document.querySelectorAll(".update-link");
const deleteLinks = document.querySelectorAll(".delete-link");

updateLinks.forEach(updateElement => {
  updateElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const contaTipoId = el.target.getAttribute('data-id');
    const nome=el.currentTarget.parentNode.parentNode.firstChild.nextSibling.value;
    try {
      const response = await fetch(`${ipClient}/api/conta-tipos/${contaTipoId}`, {
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
        // window.location.reload();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

deleteLinks.forEach(linkElement => {
  linkElement.addEventListener("click", async (el) => {
    el.preventDefault();
    const contaTipoId = el.target.getAttribute('data-id');
    try {
      const response = await fetch(`${ipClient}/api/conta-tipos/${contaTipoId}`, {
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
      // window.location.reload();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  })
});

if (contaForm !== null) {
  contaForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      const response = await fetch(`${ipClient}/api/conta-tipos/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: contaTipo.value,
        })
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        contaTipo.value='';
        infoParaph.classList.remove('infoError');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}