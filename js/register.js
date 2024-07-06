const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^.{4,12}$/;

export const estadoValidacionCampos = {
  userName: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario(formRegister, alertaError, alertaExito);
  });

  inputUser.addEventListener("input", () => {
    validarCampo(userNameRegex, inputUser, "Ім’я користувача має містити від 4 до 16 цифр і може містити лише літери та символи підкреслення.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex, inputEmail, "Електронна пошта може містити лише літери, цифри, крапки, дефіси та підкреслення.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex, inputPass, "Пароль має містити від 4 до 12 символів.");
  });
});

function validarCampo(regex, input, mensajeError) {
  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    alertaError.style.display = "none";
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    alertaError.style.display = "block";
    alertaError.textContent = mensajeError;
  }
  actualizarEstadoValidacion(input);
}

function actualizarEstadoValidacion(input) {
  if (input === inputUser) {
    estadoValidacionCampos.userName = userNameRegex.test(input.value);
  } else if (input === inputEmail) {
    estadoValidacionCampos.userEmail = emailRegex.test(input.value);
  } else if (input === inputPass) {
    estadoValidacionCampos.userPassword = passwordRegex.test(input.value);
  }
}

function enviarFormulario(form, alertaError, alertaExito) {
  if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
    // Aquí puedes enviar los datos del formulario al servidor y manejar la respuesta.
    // Por ejemplo, usando fetch() para hacer una solicitud POST.

    // Simulación de una solicitud exitosa
    setTimeout(() => {
      alertaExito.style.display = "block";
      alertaExito.textContent = "Реєстрація успішна! Перенаправлення...";
      alertaError.style.display = "none";

      // Redirigir al dashboard del usuario después de un breve retrasок
      setTimeout(() => {
        window.location.href = "/deshboard.html"; // Cambia "/dashboard" a la URL de tu dashboard
      }, 2000); // Espera 2 segundos antes de redirigir
    }, 1000);
  } else {
    alertaError.style.display = "block";
    alertaError.textContent = "Будь ласка, заповніть усі поля правильно.";
  }
  
}

function login(username) {
  // Оновлюємо відображення імені користувача в кабінеті
  const usernameDisplay = document.getElementById('username-display');
  usernameDisplay.textContent = username;
}
