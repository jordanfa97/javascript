const d = document;
const button = d.getElementById("button");
const support = d.getElementById("support");
const cont = d.getElementById("cont");
let interval1s = 0;
let contNumber = 15;
let score = 0;

//animación
function animation() {
  button.classList.add("slidein");
}

//funcion inicia el juego
function play() {
  if (contNumber == 15) {
    interval1s = setInterval(() => {
      if (contNumber < 0) {
        clearInterval(interval1s);
        interval1s = 0;
        button.classList.remove("slidein");
        finalScore();
      } else {
        cont.textContent = contNumber;
        contNumber--;
      }
    }, 1000);
  }
  animation();
  score++;
}

//evento inicia el juego
button.addEventListener("click", play);

//muestra resultado final
function finalScore() {
  alert("Tu puntación es : " + score);
  contNumber = 15;
  score = 0;
  cont.textContent = contNumber;
}

//mensaje con las reglas del juego
function rules() {
  alert(
    "Gana el que más puntos haga en 15 segundos, comienza cuando se empiece a mover el botón, suertee!!"
  );
}

support.addEventListener("click", rules);
