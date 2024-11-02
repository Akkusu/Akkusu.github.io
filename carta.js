// Carta.js
class Carta {
  constructor(message = "Mensaje de ejemplo") {
    this.message = message;
    this.isOnScreen = false;  // La carta está visible en pantalla
    this.isOpen = false;      // El contenido de la carta está abierto
    this.init();
  }

  init() {
    // Crear el contenedor principal y aplicar los estilos CSS
    this.cartaContainer = document.createElement("div");
    this.cartaContainer.classList.add("container-letter");
    this.cartaContainer.innerHTML = `
      <div class="cover"></div>
      <span class="heart">♥</span>
      <p class="paper">${this.message}</p>
      <div class="letter"></div>
    `;

    // Asegurar que el contenedor esté en el DOM con opacidad inicial
    this.cartaContainer.style.opacity = "0";
    this.cartaContainer.style.visibility = "hidden";
    document.body.appendChild(this.cartaContainer);

    // Evento para abrir la carta (si está cerrada) o desplegar el contenido
    this.cartaContainer.addEventListener("click", (event) => {
      event.stopPropagation(); // Evitar que el clic en la carta cierre la carta
      this.toggleContent();
    });

    // Guardar referencias
    this.coverElement = this.cartaContainer.querySelector(".cover");
    this.paperElement = this.cartaContainer.querySelector(".paper");
    this.heartElement = this.cartaContainer.querySelector(".heart");
  }

  toggleCarta() {
    if (!this.isOnScreen) {
      this.showCarta();
    } else {
      this.hideCarta();
    }
  }

  showCarta() {
    // Asegurar que esté visible y luego activar el fade-in
    this.cartaContainer.style.visibility = "visible";
    this.cartaContainer.style.display = "block";

    setTimeout(() => {
      this.cartaContainer.style.opacity = "1";
    }, 10); // Activar el fade-in con un retraso mínimo para que funcione en el primer clic

    this.isOnScreen = true;
  }

  hideCarta() {
    // Iniciar el fade-out
    this.cartaContainer.style.opacity = "0";
    
    setTimeout(() => {
      this.cartaContainer.style.visibility = "hidden";
      this.cartaContainer.style.display = "none";
    }, 500); // Retraso para completar el fade-out antes de ocultar completamente

    this.isOnScreen = false;
    this.isOpen = false; // Restablece el estado de abierto
  }

  toggleContent() {
    if (!this.isOpen) {
      this.openCarta();
    } else {
      this.closeCarta();
    }
  }

  openCarta() {
    this.coverElement.classList.add("open-cover");
    setTimeout(() => {
      this.coverElement.style.zIndex = -1;
      this.paperElement.classList.add("open-paper");
      this.heartElement.style.display = "block";
    }, 500);
    this.isOpen = true;
  }

  closeCarta() {
    this.paperElement.classList.remove("open-paper");
    this.paperElement.classList.add("close-paper");

    setTimeout(() => {
      this.coverElement.style.zIndex = 0;
      this.coverElement.classList.remove("open-cover");
      this.paperElement.classList.remove("close-paper");
      this.heartElement.style.display = "none";
    }, 500);
    this.isOpen = false;
  }
}

export default Carta;