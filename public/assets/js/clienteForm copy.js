
const clienteForm = document.querySelector("#clienteFormDados");
const clienteNomeCompleto = document.querySelector("#clienteNomeCompleto").value=JSON.parse(localStorage.getItem("currentSession")).nome;
const clienteEmail = document.querySelector("#clienteEmail").value=JSON.parse(localStorage.getItem("currentSession")).email;
const clienteMorada = document.querySelector("#clienteMorada");
const clienteTel1 = document.querySelector("#clienteTel1");
const clienteTel2 = document.querySelector("#clienteTel2");
const clienteNivel = document.querySelector("#clienteNivelAcademico");
const clienteBilhete = document.querySelector("#clienteBilhete");
const clientePassaporte = document.querySelector("#clientePassaporte");

if (clienteForm !== null) {
  clienteForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
        const response = await fetch(`http://localhost:3000/api/cliente/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              nome: clienteNomeCompleto,
              morada: clienteMorada.value,
              tlf1: clienteTel1.value,
              tlf2: clienteTel2.value,
              email: clienteEmail,
              nivel: clienteNivel.value,
              bilhete: clienteBilhete.value,
              passaporte: clientePassaporte.value,
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
          el.reset();
        }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}