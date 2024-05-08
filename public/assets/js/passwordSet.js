const passwordForm = document.querySelector("#passwordForm");
const passwordAtual = document.querySelector("#passwordAtual");
const passwordNovo = document.querySelector("#passwordNova");
const passwordConfirmar = document.querySelector("#passwordConfirmar");
const funcionarioPasswordForm = document.querySelector("#funcionarioPasswordForm");

if (passwordForm !== null) {
  passwordForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      if (passwordNovo.value !== passwordConfirmar.value) {
        infoParaph.textContent = "Password diferentes";
        infoParaph.classList.add('infoError');
      } else {
        const response = await fetch(`${ipClient}/api/utilizador/password_update`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // email:JSON.parse(localStorage.getItem("currentSession")).email ,
            passwordAtual: passwordAtual.value,
            passwordNova: passwordNovo.value,
            passwordConfirmar: passwordConfirmar.value,
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
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}
if (funcionarioPasswordForm !== null) {
  funcionarioPasswordForm.addEventListener("submit", async (el) => {
    try {
      el.preventDefault();
      if (passwordNovo.value !== passwordConfirmar.value) {
        infoParaph.textContent = "Password diferentes";
        infoParaph.classList.add('infoError');
      } else {
        const response = await fetch(`${ipServer}/api/funcionario/password_update`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // email:JSON.parse(localStorage.getItem("currentSession")).email ,
            passwordAtual: passwordAtual.value,
            passwordNova: passwordNovo.value,
            passwordConfirmar: passwordConfirmar.value,
          })
        });
        const data = await response.json();
        infoParaph.textContent = data.message;
        if (data.error) {
          infoParaph.classList.add('infoError');
        } else {
          infoParaph.classList.remove('infoError');
          funcionarioPasswordForm.reset();
        }
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}