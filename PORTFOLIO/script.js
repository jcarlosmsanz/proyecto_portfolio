window.addEventListener("scroll", function () {
  var section = document.getElementById("acerca");
  var title = document.getElementById("titulo");
  var paragraphs = document.getElementsByClassName("parrafo");
  var sectionOffset = section.offsetTop;
  var windowHeight = window.innerHeight;

  if (window.pageYOffset >= sectionOffset - windowHeight / 2) {
    title.style.left = "0";

    for (var i = 0; i < paragraphs.length; i++) {
      var delay = i * 1;
      paragraphs[i].style.opacity = 1;
      paragraphs[i].style.transitionDelay = delay + "s";
    }
  } else {
    title.style.left = "-100%";

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.opacity = 0;
      paragraphs[i].style.transitionDelay = "0s";
    }
  }
});



    /* se utiliza un bucle for para iterar sobre los elementos de clase "parrafo" 
    y se aplica una transición de opacidad con un retraso creciente para cada párrafo, 
    logrando así que aparezcan de uno en uno. */