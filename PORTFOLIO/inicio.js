
  // Array con los textos en diferentes idiomas
  var languageTexts = [
    ['Hola,', 'mi nombre es Juancar.'], // Español
    ['Hola,', 'el meu nom és Juancar.'], // Catalán
    ['Hola,', 'o meu nome é Juancar.'], // Gallego
    ['Kaixo,', 'nire izena Juancar da.'], // Euskera
    ['Hello,', 'my name is Juancar.'] // Inglés
  ];

  var currentIndex = 0; // Índice actual

  function toggleLanguage() {
    var h1Elements = document.querySelectorAll('#inicio h1');

    // Agregar clase para animación de desvanecimiento
    h1Elements[0].classList.add('fade-out');
    h1Elements[1].classList.add('fade-out');

    setTimeout(function() {
      // Cambiar los textos de los elementos h1 según el índice actual
      h1Elements[0].textContent = languageTexts[currentIndex][0];
      h1Elements[1].textContent = languageTexts[currentIndex][1];

      // Eliminar clase de desvanecimiento y agregar clase para animación de aparición
      h1Elements[0].classList.remove('fade-out');
      h1Elements[1].classList.remove('fade-out');
      h1Elements[0].classList.add('fade-in');
      h1Elements[1].classList.add('fade-in');

      setTimeout(function() {
        // Eliminar clase de aparición
        h1Elements[0].classList.remove('fade-in');
        h1Elements[1].classList.remove('fade-in');

        // Incrementar el índice o reiniciar si alcanza el final del array
        currentIndex = (currentIndex + 1) % languageTexts.length;
      }, 1000); // Duración de la animación de aparición: 1 segundo
    }, 1000); // Duración de la animación de desvanecimiento: 1 segundo
  }

  // Ejecutar la función toggleLanguage cada 2 segundos
  setInterval(toggleLanguage, 2000);