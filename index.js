function reiniciar(event) {
  event.preventDefault();
  document.getElementById("total").innerHTML = "";
  document.getElementById("total").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("fechaEntrada").value = "";
  document.getElementById("horaEntrada").value = "";
  document.getElementById("enviar").style.display = "flex";
  document.getElementById("salidaTime").style.display = "none";
  document.getElementById("salidaTime").innerHTML = "";
}

function enviarEntrada(event) {
  event.preventDefault();

  const fechaSalidaInput = document.getElementById("fechaEntrada").value;

  const horaSalidaInput = document.getElementById("horaEntrada").value;
  if (fechaSalidaInput === "" || horaSalidaInput === "") {
    alert("Debes completar todos los campos");
    return;
  }

  const fechaHoraString = fechaSalidaInput + "T" + horaSalidaInput;

  const objetoFecha = new Date(fechaHoraString);

  const dia = objetoFecha.getDate();
  const mes = objetoFecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
  const anio = objetoFecha.getFullYear();
  const hora = objetoFecha.getHours();
  const minutos = objetoFecha.getMinutes();

  console.log("Día:", dia);
  console.log("Mes:", mes);
  console.log("Año:", anio);
  console.log("Hora:", hora);
  console.log("Minutos:", minutos);

  const nuevoObjetoFecha = new Date(anio, mes - 1, dia, hora, minutos); // Se resta 1 porque los meses van de 0 a 11

  if (compararFechaConActual(nuevoObjetoFecha)) {
    calcultarPrecio(nuevoObjetoFecha);
  }
  document.getElementById("salidaTime").style.display = "flex";
  document.getElementById("salidaTime").innerHTML =
    "Hora de salida: " + new Date().toLocaleString();
}

function compararFechaConActual(fecha) {
  console.log("me llamo");
  var fechaActual = new Date();
  console.log(fecha < fechaActual);

  if (fecha < fechaActual) {
    console.log("todo ok");
    return true;
  } else {
    console.log("parametro invalido");
    return false;
  }
}

function calcultarPrecio(fecha) {
  let diasAparcado = 0;
  let horasAparcado = 0;
  const fechaActual = new Date();
  let totalAPagar = 0;

  const diffTime = Math.abs(fechaActual - fecha);
  horasAparcado = Math.ceil(diffTime / (1000 * 60 * 60));
  while (horasAparcado >= 24) {
    diasAparcado++;
    horasAparcado = horasAparcado - 24;
  }
  console.log(
    "🚀 ~ file: index.js:75 ~ calcultarPrecio ~ horasAparcado:",
    horasAparcado
  );

  if (diasAparcado > 0) {
    totalAPagar += 20 * diasAparcado;
  }
  if (horasAparcado > 0) {
    totalAPagar = totalAPagar + 1.2;
    horasAparcado = horasAparcado - 1;
  }
  if (horasAparcado > 0) {
    totalAPagar += horasAparcado * 1.5;
  }
  document.getElementById("total").innerHTML = "Me debes: " + totalAPagar + "€";
  document.getElementById("total").style.display = "flex";
  document.getElementById("reset").style.display = "flex";
  document.getElementById("enviar").style.display = "none";

  console.log("total a pagar: ", totalAPagar);
}
