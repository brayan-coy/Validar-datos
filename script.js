document
  .getElementById("ingresarButton")
  .addEventListener("click", function () {
    var usuarioIngresado = prompt("Ingresa el nombre de usuario:");
    var numeroIngresado = prompt("Ingresa el número 6789:");

    if (usuarioIngresado === "brayan" && numeroIngresado === "666") {
      // Redirigir a otra página si el nombre de usuario y número son correctos
      window.location.href = "otrapagina.html";
    } else {
      alert("Datos incorrectos. Inténtalo nuevamente.");
    }
  });
