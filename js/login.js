import{ validarCampo,emailRegex,passwordRegex,estadoValidacionCampos,enviarFormulario} from "./register.js"
const formLogin = document.querySelector(".form-login");
const inputPass = document.querySelector('.form-login input[type="password"]');
const inputEmail = document.querySelector('.form-login input[type="email"]');
const alertaErrorLogin = document.querySelector(".form-login .alerta-error");
const alertaExitoLogin = document.querySelector(".form-login .alerta-exito");



document.addEventListener("DOMContentLoaded", () => {
    formLogin.addEventListener("submit", (e) => {
    estadoValidacionCampos.userName = true
      e.preventDefault();
      enviarFormulario(formLogin,alertaErrorLogin,alertaExitoLogin);
    });

    inputEmail.addEventListener("input", () => {
      validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, números, puntos, guiones y guíon bajo.");
    });
  
    inputPass.addEventListener("input", () => {
      validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
    });
  });

  function validarCampoLogin(regex, input, mensajeError) {
    if (regex.test(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      alertaErrorLogin.style.display = "none";
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      alertaErrorLogin.style.display = "block";
      alertaErrorLogin.textContent = mensajeError;
    }
  }

  function enviarFormularioLogin(form, alertaError, alertaExito) {
    if (userNameRegex.test(inputLoginUser.value) && passwordRegex.test(inputLoginPass.value)) {
      // Імітація успішного входу
      setTimeout(() => {
        alertaExito.style.display = "block";
        alertaExito.textContent = "Вхід успішний! Перенаправлення...";
        alertaError.style.display = "none";

        setTimeout(() => {
          window.location.href = "dashboard.html"; // Ensure this path matches the location of your dashboard page
        }, 2000); // Wait for 2 seconds before redirecting
      }, 1000);
    } else {
      alertaError.style.display = "block";
      alertaError.textContent = "Будь ласка, заповніть усі поля правильно.";
    }
  }