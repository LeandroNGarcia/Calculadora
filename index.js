let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let buttonOk = document.getElementById("button-ok");
let alerta = document.getElementById("alerta");
let sonidoTecla = document.getElementById("sonido_tecla");

window.onload = () => {
  input.value = "";
};

buttonOk.addEventListener("click", () => {
  alerta.classList.replace("Mostrar", "noMostrar");
  input.value = "";
});

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    input.value += button_class.value;
    sonidoTecla.play();
  });
});

equal.addEventListener("click", () => {
  let inp_val = input.value;
  sonidoTecla.play();
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alerta.classList.replace("noMostrar", "Mostrar");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  sonidoTecla.play();
});

erase.addEventListener("click", () => {
  sonidoTecla.play();
  input.value = input.value.substr(0, input.value.length - 1);
});
