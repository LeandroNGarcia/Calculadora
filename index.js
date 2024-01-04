//Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
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

//Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    //display value of each button
    input.value += button_class.value;
    sonidoTecla.play();
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  let inp_val = input.value;
  sonidoTecla.play();
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    // alert("Calculo no valido");
    alerta.classList.replace("noMostrar", "Mostrar");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
  sonidoTecla.play();
});
//Erase Single Digit
erase.addEventListener("click", () => {
  sonidoTecla.play();
  input.value = input.value.substr(0, input.value.length - 1);
});
