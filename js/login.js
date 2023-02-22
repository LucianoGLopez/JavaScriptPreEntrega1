// Agrego evento "click" formularios login y register (index.html)
const buttonLogin = document.getElementById("formButtonIngreso");
buttonLogin.addEventListener("click", () => {
    login ();
});

const buttonRegister = document.getElementById("formButtonRegistro");
buttonRegister.addEventListener("click", () => {
    registerNewUser ();
});