const emailForm = document.querySelector("#setEmailForm");
const funcionarioEmailForm = document.querySelector("#funcionarioEmailForm");
const emailNovo = document.querySelector("#emailNovo");
const emailAtual = document.querySelector("#emailAtual");
const emailNovoConfirmacao = document.querySelector("#emailNovoConfirmacao");
// const infoParaph = document.querySelector(".info");

if (emailForm !== null) {
  emailForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      if (emailNovo.value !== emailNovoConfirmacao.value) {
        infoParaph.textContent = "Emails diferentes";
        infoParaph.classList.add('infoError');
      } else {
        if (JSON.parse(localStorage.getItem("currentSession")).email !== emailNovo.value) {
          const response = await fetch(`${ipClient}/api/utilizador/email_update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lastEmail: JSON.parse(localStorage.getItem("currentSession")).email,
              email: emailNovo.value
            })
          });
          const data = await response.json();
          infoParaph.textContent = data.message;
          if (data.error) {
            infoParaph.classList.add('infoError');
          } else {
            infoParaph.classList.remove('infoError');
            emailForm.reset();
          }
        } else {
          infoParaph.textContent = "Email em Uso";
          infoParaph.classList.add('infoError');
        }

      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (funcionarioEmailForm !== null) {
  funcionarioEmailForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      if (emailNovo.value !== emailNovoConfirmacao.value) {
        infoParaph.textContent = "Emails diferentes";
        infoParaph.classList.add('infoError');
      } else {
        if (JSON.parse(localStorage.getItem("currentSession")).email !== emailNovo.value) {
          const response = await fetch(`${ipServer}/api/funcionario/email_update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              emailAtual: emailAtual.value,
              novoEmail: emailNovo.value
            })
          });
          const data = await response.json();
          infoParaph.textContent = data.message;
          if (data.error) {
            infoParaph.classList.add('infoError');
          } else {
            infoParaph.classList.remove('infoError');
            emailForm.reset();
          }
        } else {
          infoParaph.textContent = "Email em Uso";
          infoParaph.classList.add('infoError');
        }
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}