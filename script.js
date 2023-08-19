var timeoutID;

function recargarPagina() {
  window.location.reload(); // Recargar la página actual
}

function iniciarTimeout() {
  clearTimeout(timeoutID); // Reiniciar el timeout
  timeoutID = setTimeout(recargarPagina, 30000); // Configurar timeout para recargar después de 30 segundos
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("ingresarButton")
    .addEventListener("click", function () {
      iniciarTimeout(); // Reiniciar el timeout al hacer clic en el botón
      pedirDatos();
    });
});

function pedirDatos() {
  var usuarioIngresado = document.getElementById("nombreUsuario").value;
  var contrasenaIngresada = document.getElementById("contrasena").value;

  if (usuarioIngresado === "brayan" && contrasenaIngresada === "666") {
    // Redirigir a otra página si el nombre de usuario y contraseña son correctos
    window.location.href = "otrapagina.html";
  } else {
    alert("Datos incorrectos. Inténtalo nuevamente.");
    iniciarTimeout(); // Reiniciar el timeout después de un intento fallido
  }
}

// Iniciar el timeout cuando se carga la página
iniciarTimeout();
