const passwordInput = document.querySelector("#senha");
const togglePassword = document.querySelector("#toggle-password");
const form = document.querySelector("#login-form");
const message = document.querySelector("#form-message");
const forgotButton = document.querySelector("#forgot-button");

togglePassword.addEventListener("click", () => {
  const showing = passwordInput.type === "text";
  passwordInput.type = showing ? "password" : "text";
  togglePassword.setAttribute("aria-label", showing ? "Mostrar senha" : "Ocultar senha");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Demonstração visual: não envia nem armazena credenciais.
  message.textContent = "Esta é uma demonstração. A autenticação com o SUAP ainda precisa ser integrada.";
});

forgotButton.addEventListener("click", () => {
  message.textContent = "A recuperação de senha deverá ser feita pelo serviço oficial do SUAP.";
});
