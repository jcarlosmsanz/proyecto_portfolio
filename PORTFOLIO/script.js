window.addEventListener('DOMContentLoaded', (event) => {
  const inicio = document.getElementById('inicio');
  const text = inicio.querySelector('h1');

  // Cargar imagen de fondo con transición
  inicio.style.backgroundImage = "url('img/portrait.jpg')";

  setTimeout(() => {
    inicio.style.opacity = '1';
  }, 100);

  // Animar aparición de texto en el primer section
  text.style.transform = 'translateY(-50px)';
  text.style.opacity = '0';

  setTimeout(() => {
    text.style.transform = 'translateY(0)';
    text.style.opacity = '1';
  }, 1000);
});
  
