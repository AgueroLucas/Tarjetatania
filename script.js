
let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 900);
    }, index++ * (interval / 3))
}

// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function() {

  var formulario = document.formulario_registro,
    elementos = formulario.elements;

  // Funcion que se ejecuta cuando el evento click es activado

  var validarInputs = function() {
    for (var i = 0; i < elementos.length; i++) {
      // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "text2") {
        // Si es tipo texto, email o password vamos a comprobar que esten completados los input
        if (elementos[i].value.length == 0) {
          console.log('El campo ' + elementos[i].name + ' esta incompleto');
          elementos[i].className = elementos[i].className + " error";
          return false;
        } else {
          elementos[i].className = elementos[i].className.replace(" error", "");
        }
      }
    }

    return true;
  };

  var validarRadios = function() {
    var opciones = document.getElementsByName('sexo'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
        // Recorremos los radio button
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo sexo esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del radio button
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };


  var enviar = function(e) {
    if (!validarInputs()) {
      console.log('Falto validar los Input');
      e.preventDefault();
    } else if (!validarRadios()) {
      console.log('Falto validar los Radio Button');
      e.preventDefault();
    } else {
      console.log('Envia');
      e.preventDefault();
    }
  };

  var focusInput = function() {
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  var blurInput = function() {
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };

  // --- Eventos ---
  formulario.addEventListener("submit", enviar);

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "text2") {
      elementos[i].addEventListener("focus", focusInput);
      elementos[i].addEventListener("blur", blurInput);
    }
  }

}())

