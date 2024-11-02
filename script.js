// script.js
import Carta from "./carta.js";

const pages = document.querySelectorAll(".page");
const nextButton = document.getElementById("next-page");
const prevButton = document.getElementById("prev-page");
const letterButton = document.getElementById("letter-button"); // Botón de carta
const pageSound = document.getElementById("page-sound");

let currentPage = 0;
let audioStarted = false;
let cartaInstance = null; // Variable para la instancia de la carta

// Función para mostrar la página actual y actualizar los botones
function updatePage() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

  document.body.className = "";
  document.body.classList.add(`bgpage-${currentPage + 1}`);

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;

  letterButton.style.display =
    currentPage === pages.length - 1 ? "inline-flex" : "none";
}

// Función para avanzar de página
function nextPage() {
  if (!audioStarted) {
    pageSound.play();
    audioStarted = true;
  }

  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
}

// Función para retroceder de página
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
}

// Función para abrir la carta usando la clase Carta
function openLetter() {
  if (!cartaInstance) {
    cartaInstance = new Carta(
      "Mi amor, mi querida Danielita, feliz mes. Me has hecho feliz otro mes más y espero haber hecho lo mismo por ti, mi querida chiquitita. Decidí hacerte esta página simplemente porque soy medio ñoño, amor, y puedo combinar lo que me gusta con lo que me apasiona (claramente tú). Espero que algún día ambos podamos ver esta página y reírnos de cómo te hice una ñoñería. Por mientras, feliz mes, amor. Otro mes de felicidad, otro mes más sabiendo que elegí al amor de mi vida."
    );
  }
  cartaInstance.toggleCarta(); // Alterna entre mostrar y ocultar la carta
}

// Eventos para los botones
nextButton.addEventListener("click", nextPage);
prevButton.addEventListener("click", prevPage);
letterButton.addEventListener("click", openLetter);

// Inicialización
updatePage();
