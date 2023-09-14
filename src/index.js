const startButton = document.getElementById("button");

const bolasSacadas = [];

function creaCarton() {
  const numerosAleatorios = [];
  for (let i = 0; i < 15; i++) {
    // Generar un número aleatorio entre 1 y 90 (ambos inclusive)
    const numero = Math.floor(Math.random() * 90) + 1;
    // Agregar el número al array
    numerosAleatorios.push(numero);
  }
  return numerosAleatorios;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
  }
}

const bombo = [];
for (let i = 1; i <= 90; i++) {
  bombo.push(i);
}

shuffleArray(bombo);

const cartonJugador = creaCarton();
const cartonCPU = creaCarton();

function pintaCarton(selector, array) {
  const parent = document.querySelector(`.${selector}`);

  for (const e of array) {
    const divcarton = document.createElement("div");
    divcarton.className = "numero n" + e;
    divcarton.textContent = e;
    parent.appendChild(divcarton);
  }
}

function pintaBolasSacadas(selector, elemento) {
  const parent = document.querySelector(`.${selector}`);
  const divcarton = document.createElement("div");
  divcarton.className = "numero";
  divcarton.textContent = elemento;
  parent.appendChild(divcarton);
}

pintaCarton("player", cartonJugador);
pintaCarton("cpu", cartonCPU);

startButton.addEventListener("click", () => {
  sacarBola();
});

function sacarBola() {
  const indiceBola = Math.floor(Math.random() * bombo.length);
  const bola = bombo[indiceBola];
  bombo.splice(indiceBola, 1);
  bolasSacadas.push(bola);
  pintaBolasSacadas("bolas", bola);
  const divbola = document.querySelector("#button");
  divbola.textContent = bola;
  const numero = document.querySelectorAll(`.n${bola}`);
  for (let i = 0; i < numero.length; i++) {
    numero[i].classList.add("tachado");
  }
  const totalJugador = document.querySelectorAll(".player .tachado").length;
  const totalCpu = document.querySelectorAll(".cpu .tachado").length;
  if (totalJugador === 15) {
    startButton.classList.add("hide");
    const parent = document.getElementById("bola");
    const divGanador = document.createElement("div");
    divGanador.className = "winner";
    divGanador.innerText = "PLAYER WINS!!";
    parent.appendChild(divGanador);
  }
  if (totalCpu === 15) {
    startButton.classList.add("hide");
    const parent = document.getElementById("bola");
    const divGanador = document.createElement("div");
    divGanador.className = "winner";
    divbola.innerText = "CPU WINS!!";
    parent.appendChild(divGanador);
  }
}
