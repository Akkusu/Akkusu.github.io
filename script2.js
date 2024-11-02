// Añadir estrellas fugaces y confeti a las páginas
document.addEventListener("DOMContentLoaded", () => {
    const createShootingStar = (page) => {
      const star = document.createElement("div");
      star.classList.add("star-shooting");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      page.appendChild(star);
  
      setTimeout(() => {
        page.removeChild(star);
      }, 5000);
    };
  
    const createInsect = (page, top, left) => {
      const insect = document.createElement("div");
      insect.classList.add("insect");
      insect.style.top = `${top}px`;
      insect.style.left = `${left}px`;
      page.appendChild(insect);
    };
  
    const createLampLight = (page, top, left) => {
      const light = document.createElement("div");
      light.classList.add("lamp-light");
      light.style.top = `${top}px`;
      light.style.left = `${left}px`;
      page.appendChild(light);
    };
  
    const createSteam = (page, top, left) => {
      const steam = document.createElement("div");
      steam.classList.add("steam");
      steam.style.top = `${top}px`;
      steam.style.left = `${left}px`;
      page.appendChild(steam);
    };
  
    const createConfetti = (page, top, left, color) => {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.top = `${top}px`;
      confetti.style.left = `${left}px`;
      confetti.style.background = color;
      page.appendChild(confetti);
    };
  
    // Crear elementos en las páginas específicas
    const page2 = document.querySelector(".page-2");
    const page3 = document.querySelector(".page-3");
    const page4 = document.querySelector(".page-4");
    const page5 = document.querySelector(".page-5");
    const page6 = document.querySelector(".page-6");
  
    setInterval(() => {
      createShootingStar(page2);
    }, 7000);
  
    // Añadir insectos a la página 3
    createInsect(page3, 50, 100);
    createInsect(page3, 120, 200);
  
    // Añadir luces a la página 4
    createLampLight(page4, 30, 50);
    createLampLight(page4, 150, 200);
  
    // Añadir vapor a la página 5
    createSteam(page5, 20, 100);
  
    // Añadir confeti a la página 6
    createConfetti(page6, 50, 50, "pink");
    createConfetti(page6, 100, 120, "lightblue");
  });