var timeoutID;
var tiempoInactividad = 30000; // 30 segundos de inactividad

function recargarPagina() {
  window.location.href = "index.html"; // Redirigir a index.html
}

function iniciarTimeout() {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(recargarPagina, tiempoInactividad);
}

// Reiniciar el timeout al detectar movimiento del mouse
document.addEventListener("mousemove", function () {
  iniciarTimeout();
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("ingresarButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      iniciarTimeout();
      pedirDatos();
    });
});

function pedirDatos() {
  var usuarioSeleccionado = document.getElementById("usuarioSelector").value;
  var contrasenaIngresada = document.getElementById("contrasena").value;

  if (usuarioSeleccionado === "brayan" && contrasenaIngresada === "666") {
    window.location.href = "otrapagina.html";
  } else if (usuarioSeleccionado === "pepe" && contrasenaIngresada === "777") {
    window.location.href = "otrapagina.html";
  } else {
    alert("Datos incorrectos. Inténtalo nuevamente.");
    iniciarTimeout();
  }
}

// Iniciar el timeout cuando se carga la página
iniciarTimeout();
