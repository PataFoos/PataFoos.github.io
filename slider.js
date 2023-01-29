
const slides = document.querySelectorAll(".slide");

// Mueve cada slide hacia el costado, uno al lado del otro
slides.forEach((slide, indice) => {
  slide.style.transform = `translateX(${indice * 100}%)`;
});


const slideSiguiente = document.querySelector(".btn-siguiente");
let slideActual = 0;
let maxSlides = slides.length - 1;

slideSiguiente.addEventListener("click", function () {
  // si es el ultimo slide, empieza de nuevo
  if (slideActual === maxSlides) {
    slideActual = 0;
  } else {
    slideActual++;
  }

  slides.forEach((slide, indice) => {
    slide.style.transform = `translateX(${100 * (indice - slideActual)}%)`;
  });
});

const slideAnterior = document.querySelector(".btn-anterior");

slideAnterior.addEventListener("click", function () {
  // si era el primero, va al final
  if (slideActual === 0) {
    slideActual = maxSlides;
  } else {
    slideActual--;
  }

  slides.forEach((slide, indice) => {
    slide.style.transform = `translateX(${100 * (indice - slideActual)}%)`;
  });
});