var timeoutID;

function redirigirAIndex() {
  window.location.href = "index.html"; // Redirigir al index.html
}

function iniciarTimeout() {
  clearTimeout(timeoutID); // Reiniciar el timeout
  timeoutID = setTimeout(redirigirAIndex, 1800000); // Configurar timeout para redirigir después de 30 minutos (1800000 milisegundos)
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
    window.location.href = "otrapagina.html";
  } else if (usuarioSeleccionado === "pepe" && contrasenaIngresada === "777") {
    window.location.href = "otrapagina.html";
  } else if (usuarioSeleccionado === "jorge" && contrasenaIngresada === "888") {
    window.location.href = "otrapagina.html";
  } else {
    alert("Datos incorrectos. Inténtalo nuevamente.");
    iniciarTimeout(); // Reiniciar el timeout después de un intento fallido
  }
}

// Iniciar el timeout cuando se carga la página
iniciarTimeout();
