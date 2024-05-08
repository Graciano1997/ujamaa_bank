
const funcionarioNome = document.querySelector("#funcionarioNome");
const funcionarioEmail = document.querySelector("#funcionarioEmail");
const funcionarioSexo = document.querySelector("#funcionarioSexo");
const funcionarioMorada = document.querySelector("#funcionarioMorada");
const funcionarioPassword = document.querySelector("#funcionarioPassword");
const funcionarioPasswordConfirm = document.querySelector("#funcionarioPasswordConfirm");
const funcionarioCadastrarBtn = document.querySelector("#funcionarioCadastrarBtn");
const funcionarioEmailLogin = document.querySelector("#funcionarioEmailLogin");
const funcionarioPasswordLogin = document.querySelector("#funcionarioPasswordLogin");



// const codigoSecretoField = document.querySelector("#codigoSecretoField");
const loginFormFuncionario = document.querySelector("#loginFormFuncionario");
const registerFormFuncionario = document.querySelector("#registerFormFuncionario");
const loginBtnFuncionario = document.querySelector("#loginBtnFuncionario");
// const recoverForm = document.querySelector("#recoverForm");
// const cadastrarBtn = document.querySelector("#cadastrarBtn");
// const loginBtn = document.querySelector("#loginBtn");
// // const quantidadeDinheiro = document.querySelector("#quantidadeDinheiro");
// const passwordConfirm = document.querySelector("#passwordConfirm");
// const infoParaph = document.querySelector(".info");
// const ibanField = document.querySelector("#ibanField");
// const logoutBtn = document.querySelector("#btnSair");
// const logoutBtnNO = document.querySelector("#btnSairNO");
// const logoutBtnYES = document.querySelector("#btnSairYES");
// const chocolateMenu = document.querySelector(".chocolateContainer");
// const mainArea = document.querySelector(".mainArea");
// const validaCountBtn = document.querySelector("#validaCountBtn");
// const validaCodeBtn = document.querySelector("#validaCodeBtn");
// const salvarNovasCredenciasBtn = document.querySelector("#salvarNovasCredenciasBtn");
// const recuperarBtn = document.querySelector("#recuperarBtn");
// const chaveField = document.querySelector("#chaveField");
// const validationForm = document.querySelector("#validationForm");
// const validationCodeForm = document.querySelector("#validationCodeForm");
// const codeInput = document.querySelector("#codeInput");

// if (validationForm != null) {
//   validationForm.addEventListener("submit", async (el) => {
//     el.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/api/utilizador/confirmacaoconta', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: JSON.parse(localStorage.getItem("currentSession")).email,
//           code: chaveField.value,
//         }
//         )
//       });
      
//       const data = await response.json();
//       console.log("From validation", data);
//       if (data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       }

//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });
// }

// if (validationCodeForm != null) {
//   validationCodeForm.addEventListener("submit", async (el) => {
//     el.preventDefault();
//     });
// }

if (registerFormFuncionario != null) {
  registerFormFuncionario.addEventListener("submit", async (element) => {
    element.preventDefault();
    try {
      const response = await fetch(`${ipServer}/api/funcionario/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: funcionarioNome.value,
          email: funcionarioEmail.value,
          sexo: funcionarioSexo.value,
          morada: funcionarioMorada.value,
          senha: funcionarioPassword.value
        })
      });
      const data = await response.json();
      if (data.sucesso) {
        infoParaph.textContent = data.message;
        loginFormFuncionario.reset();
      }
      if (data.error) {
        infoParaph.classList.add('infoError');
        infoParaph.textContent = data.message;
      }
    } catch (error) {
      console.log('There was a problem with the fetch operation');
    }
  });
}

// if (recoverForm != null) {
//   recoverForm.addEventListener("submit", async (element) => {
//     element.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:3000/api/utilizador/${localStorage.getItem("_")}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           senha: senhaField.value
//         }
//         )
//       });
//       const data = await response.json();
//       if (data.sucesso) {
//         infoParaph.textContent = data.message;
//         recoverForm.reset();
//       }
//       if (data.error) {
//         infoParaph.classList.add('infoError');
//         infoParaph.textContent = data.message;
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });
// }


 if (loginFormFuncionario !== null) {
  loginFormFuncionario.addEventListener("submit", async (el) => {
    el.preventDefault();
     try {
       const response = await fetch(`${ipServer}/api/funcionario/authenticate`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           email: funcionarioEmailLogin.value,
           senha: funcionarioPasswordLogin.value
         }
         )
       });
       const data = await response.json();
        if (data.redirectUrl) {
          localStorage.setItem("currentSession", JSON.stringify(data.user));
          window.location.href = data.redirectUrl;
        }
       if (data.error) {
         infoParaph.classList.add('infoError');
         infoParaph.textContent = data.message;
       }
     } catch (error) {
       console.error('There was a problem with the fetch operation:', error);
     }
   });
 }

// if (recuperarBtn !== null) {
//   recuperarBtn.addEventListener("click", async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/utilizador/recover', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: emailField.value,
//         }
//         )
//       });
//       const data = await response.json();
//       infoParaph.textContent = data.message;
//       if (data.error) {
//         infoParaph.classList.add('infoError');
//       } else {
//         infoParaph.classList.remove('infoError');
//       }
//       if (data.redirectUrl) {
//         localStorage.setItem("currentSession", JSON.stringify({email:emailField.value}));
//         window.location.href = data.redirectUrl;
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });
// }

// if (validaCodeBtn !== null) {
//   validaCodeBtn.addEventListener("click", async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/utilizador/recovervalidation', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email:JSON.parse(localStorage.getItem("currentSession")).email,
//           code:codeInput.value!==null?codeInput.value:''
//         })
//       });

//       const data = await response.json();
//       infoParaph.textContent = data.message;
//       if (data.error) {
//         infoParaph.classList.add('infoError');
//       } else {
//         infoParaph.classList.remove('infoError');
//       }
//       if (data.redirectUrl) {
//         localStorage.removeItem("currentSession");
//         localStorage.setItem("_",data.userId);
//         window.location.href = data.redirectUrl;
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });
// }


if (funcionarioPasswordConfirm!== null) {
  funcionarioPasswordConfirm.addEventListener("input", (el) => {
    if (el.target.value !== "" && el.target.value === funcionarioPassword.value) {
      if(funcionarioCadastrarBtn!==null){
        funcionarioCadastrarBtn.style.display = 'block';
      }else{
        // salvarNovasCredenciasBtn.style.display = 'block';
      }
    } else {
      if(funcionarioCadastrarBtn!==null){
        funcionarioCadastrarBtn.style.display = 'none';
      }else{
        // salvarNovasCredenciasBtn.style.display = 'none';
      }    }
  });
}

// if (chocolateMenu !== null) {
//   chocolateMenu.addEventListener("click", () => {
//     document.querySelector(".sideBarControler").classList.toggle('show');
//   });
// }

// if (mainArea !== null) {
//   mainArea.addEventListener("click", () => {
//     document.querySelector(".sideBarControler").classList.remove('show');
//   });
// }
// // Function to add separators every four digits
// function addSeparators(input) {
//   var value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
//   var formattedValue = '';
//   for (var i = 0; i < value.length; i++) {
//     if (i > 0 && i % 4 === 0) {
//       formattedValue += '.'; // Add a space after every four digits
//     }
//     formattedValue += value[i];
//   }
//   input.value = formattedValue;
// }

// if (logoutBtn !== null) {
//   logoutBtn.addEventListener('click', (el) => {
//     document.querySelector(".logoutModal").classList.remove('hide');
//   });
// }

 if (logoutBtnNO !== null) {
   logoutBtnNO.addEventListener('click', (el) => {
     document.querySelector(".logoutModal").classList.add('hide');
   });
 }

 if (logoutBtnYES !== null) {
   logoutBtnYES.addEventListener('click', (el) => {
     localStorage.removeItem("currentSession");
     window.location.href = '/';
   });
 }