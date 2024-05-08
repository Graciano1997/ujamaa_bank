const clienteForm = document.querySelector("#clienteFormDados");
const clienteNomeCompleto = document.querySelector("#clienteNomeCompleto").value=JSON.parse(localStorage.getItem("currentSession")).nome;
const clienteEmail = document.querySelector("#clienteEmail").value=JSON.parse(localStorage.getItem("currentSession")).email;
const clienteMorada = document.querySelector("#clienteMorada");
const clienteTel1 = document.querySelector("#clienteTel1");
const clienteTel2 = document.querySelector("#clienteTel2");
const clienteNivel = document.querySelector("#clienteNivelAcademico");
const clienteBilhete = document.querySelector("#clienteBilhete");
const clienteNascimento = document.querySelector("#clienteNascimento");
const clienteEstadoCivil = document.querySelector("#clienteEstadoCivil");
const clienteSexo = document.querySelector("#clienteSexo");
const clientePassaporte = document.querySelector("#clientePassaporte");
const clienteEstatoProfissional = document.querySelector("#clienteEstatuto");
const clienteRendimentoAnualBruto = document.querySelector("#clienteRendimentoAnualBruto");
const clienteCasaPropria = document.querySelector("#clienteCasaPropria");
const clienteNumeroFilho = document.querySelector("#clienteNumeroFilho");
const clientePatrimonioLiquido = document.querySelector("#clientePatrimonioLiquido");
const clienteSobreNome = document.querySelector("#clienteSobreNome");

if (clienteForm !== null) {
  clienteForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
        const response = await fetch(`${ipClient}/api/cliente/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              nome: clienteNomeCompleto,
              sobrenome: clienteSobreNome.value,
              morada: (clienteMorada.value).replaceAll(' ','_'),
              tlf1: clienteTel1.value,
              tlf2: clienteTel2.value,
              email: clienteEmail,
              nivel: clienteNivel.value,
              bilhete: clienteBilhete.value,
              passaporte: clientePassaporte.value,
              sexo: clienteSexo.value,
              estado: clienteEstadoCivil.value,
              nascimento:clienteNascimento.value,
              estatuto_profissional:(clienteEstatoProfissional.value).replaceAll(' ','_'),  
              rendimento_anual_bruto:clienteRendimentoAnualBruto.value,
              casa_propria:clienteCasaPropria.value,
              numero_filho:clienteNumeroFilho.value,
              patrimonio_liquido:clientePatrimonioLiquido.value,
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
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