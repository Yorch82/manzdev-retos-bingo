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

pintaCarton("player", cartonJugador);
pintaCarton("cpu", cartonCPU);
