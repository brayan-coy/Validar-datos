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
  var usuarioSeleccionado = document.getElementById("usuarioSelector").value;
  var contrasenaIngresada = document.getElementById("contrasena").value;

  // Verifica las credenciales según el usuario seleccionado
  if (usuarioSeleccionado === "brayan" && contrasenaIngresada === "666") {
    // Redirigir a otra página si el nombre de usuario y contraseña son correctos
    window.location.href = "otrapagina.html";
  } else if (usuarioSeleccionado === "pepe" && contrasenaIngresada === "777") {
    // Redirigir a otra página si el nuevo usuario y contraseña son correctos
    window.location.href = "otrapagina.html";
  } else {
    alert("Datos incorrectos. Inténtalo nuevamente.");
    iniciarTimeout(); // Reiniciar el timeout después de un intento fallido
  }
}

// Iniciar el timeout cuando se carga la página
iniciarTimeout();
