document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const body = document.querySelector("body");

  let currentPageIndex = 0; // Variable para seguir la página activa
  let lastPageIndex = -1; // Variable para almacenar la última página activa

  // Función para verificar la página activa
  function getCurrentPage() {
    pages.forEach((page, index) => {
      if (page.classList.contains("active")) {
        currentPageIndex = index;
      }
    });
  }

  // Función para eliminar todos los elementos generados con desvanecimiento
  function stopElements() {
    const elementsToRemove = document.querySelectorAll('.star-shooting, .insect, .lamp-light, .steam, .confetti');
    elementsToRemove.forEach(element => {
      element.classList.add('fade-out'); // Aplica la clase de desvanecimiento
      setTimeout(() => {
        element.remove(); // Elimina el elemento después de que la animación termine
      }, 5000); // Debe coincidir con la duración de la animación CSS (1s)
    });
  }


  const createShootingStar = (page, top, left) => {
      const star = document.createElement("div");
      star.classList.add("star-shooting");
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      body.appendChild(star);

      setTimeout(() => {
        body.removeChild(star);
      }, 5000);
  };

  const createInsect = (page, top, left) => {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    insect.style.top = `${top}px`;
    insect.style.left = `${left}px`;
    page.appendChild(insect);

    setTimeout(() => {
      page.removeChild(insect);
    }, 8000);
  };

  const createLampLight = (page, top, left, color) => {
    const light = document.createElement("div");
    light.classList.add("lamp-light");
    light.style.top = `${top}px`;
    light.style.left = `${left}px`;
    light.style.backgroundColor = color;
    page.appendChild(light);

    setTimeout(() => {
      page.removeChild(light);
    }, 5000);
  };

  const createBouncingBall = (page) => {
      const ball = document.createElement("div");
      ball.classList.add("bouncing-ball");
      ball.style.top = `${Math.random() * window.innerHeight}px`;
      ball.style.left = `${Math.random() * window.innerWidth}px`;
      page.appendChild(ball);

      setTimeout(() => {
        page.removeChild(ball);
      }, 5000);
  };

  const createConfetti = (page, top, left, color) => {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.top = `${top}px`;
    confetti.style.left = `${left}px`;
    confetti.style.background = color;

    const duration = Math.random() * 1 + 2;
    const delay = Math.random() * 2;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;

    page.appendChild(confetti);

    setTimeout(() => {
      page.removeChild(confetti);
    }, (duration + delay) * 16000);
  };

  // Crear elementos dependiendo de la página activa
  setInterval(() => {
    getCurrentPage();

    // Solo eliminar elementos si la página activa ha cambiado
    if (currentPageIndex !== lastPageIndex) {
      stopElements(); // Elimina elementos al cambiar de página
      lastPageIndex = currentPageIndex; // Actualiza la última página activa
    }

    if (currentPageIndex === 1) { // Page-2: Estrellas fugaces
      const randomTop = Math.random() * window.innerHeight;
      const randomLeft = Math.random() * window.innerWidth;
      createShootingStar(body, randomTop, randomLeft);
    }

    if (currentPageIndex === 2) { // Page-3: Luciérnagas
      const randomTop = Math.random() * window.innerHeight;
      const randomLeft = Math.random() * window.innerWidth;
      createInsect(body, randomTop, randomLeft);
    }

    if (currentPageIndex === 3) { // Page-4: Luces titilantes
      const randomTop = Math.random() * window.innerHeight;
      const randomLeft = Math.random() * window.innerWidth;
      const colors = ["lightpink", "lightblue", "lightyellow"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      createLampLight(body, randomTop, randomLeft, randomColor);
    }

    if (currentPageIndex === 4) { // Page-5: Bolas rebotando
      createBouncingBall(body);
    }

    if (currentPageIndex === 5) { // Page-6: Confeti
      const randomTop = -10;
      const randomRight = Math.random() * window.innerWidth;
      const colors = ["lightpink", "lightblue"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      createConfetti(body, randomTop, randomRight, randomColor);
    }
  }, 300); // Ajusta el intervalo según la frecuencia de aparición deseada
});