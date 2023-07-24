const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const btnDepositar = document.getElementById("btn-depositar");

if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./index.html";
}

infoDiv.innerHTML = `
<div>
<span>BIENVENIDO ${loggedUser.email} </span>
<span>TU SALDO ES DE ${loggedUser.balance} </span>
<div>`;

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./index.html";
});

btnDepositar.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./depositar.html";
});
