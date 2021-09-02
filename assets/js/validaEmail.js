//*** Rutina de Validación de correo electrónico

function validaEmail() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  //*** Área de validación
  if (email.match(pattern)) {
    text.innerHTML = "";
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Su correo electrónico es correcto";
    text.style.color = "#00ff15";

    setTimeout(() => {
      form.classList.remove("valid");
      email = document.getElementById("email").value = "";
      text.innerHTML = "";
    }, 15000);
  } else {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Ingrese un correo electrónico válido";
    text.style.color = "#fff";

    setTimeout(() => {
      form.classList.remove("invalid");
      email = document.getElementById("email").value = "";
      text.innerHTML = "";
    }, 15000);
  }

  //*** validamos si el email viene vacio
  if (email == "") {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "¡Por favor, ingrese su correo electrónico!";
    text.style.color = "#fff";

    setTimeout(() => {
      text.innerHTML = "";
    }, 15000);
  }
}

//*** validamos si pulsaron el botón sin colocar un correo
function validarBoton() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email == "") {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "¡Debe ingresar un correo electrónico!";
    text.style.color = "#fff";

    setTimeout(() => {
      text.innerHTML = "";
      window.history.go();
    }, 15000);
  } else {
    if (email.match(pattern)) {
      text.innerHTML = "¡Ha sido registrado correctamente!";
      text.style.color = "#00ff15";

      setTimeout(() => {
        text.innerHTML = "";
        window.history.go();
      }, 10000);
    }
  }
}
