const num1Input = document.getElementById("num-input");
const num2Input = document.getElementById("txt-input");
const buttonSumar = document.getElementById("btn-suma");
const buttonResta = document.getElementById("btn-resta");
const resultDiv = document.getElementById("div-result");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const btnRegresa = document.getElementById("btn-regresar");

let saldo = 100;

let inputValue1 = "";
num1Input.addEventListener("change", function () {
  inputValue1 = parseInt(num1Input.value);
});

buttonSumar.addEventListener("click", function () {
  let nuevoSaldo = saldo + inputValue1;
  saldo = nuevoSaldo;
  resultDiv.innerHTML += `<div>${nuevoSaldo}</div>`;
});

buttonResta.addEventListener("click", function () {
  let nuevoSaldo = saldo - inputValue1;
  saldo = nuevoSaldo;
  resultDiv.innerHTML += `<div>${nuevoSaldo}</div>`;
});


btnRegresa.addEventListener("click", function () {
    localStorage.removeItem("loggedUser");
    window.location.href = "./home.html";
  });