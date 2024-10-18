// Crea un nuevo worker, dándole el código en "generate.js"
const worker = new Worker("./generate.js");

// Cuando el usuario hace clic en "Generar números primos", envía un mensaje al worker.
// El comando del mensaje es "generar" y el mensaje también contiene "cuota",
// cuál es el número de números primos a generar.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// Cuando el worker envía un mensaje al hilo principal,
// actualiza el cuadro de salida con un mensaje para el usuario, incluido el número de
// números primos que se generaron, tomados de los datos del mensaje.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
