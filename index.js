function enviarEntrada(event) {
  event.preventDefault();

  const fechaSalidaInput = document.getElementById("fechaSalida").value;

  const horaSalidaInput = document.getElementById("horaSalida").value;

  const fechaHoraString = fechaSalidaInput + "T" + horaSalidaInput;

  const objetoFecha = new Date(fechaHoraString);

  const dia = objetoFecha.getDate();
  const mes = objetoFecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
  const anio = objetoFecha.getFullYear();
  const hora = objetoFecha.getHours();
  const minutos = objetoFecha.getMinutes();

  // Muestra la información en la consola (puedes adaptarlo según tus necesidades)
  console.log("Día:", dia);
  console.log("Mes:", mes);
  console.log("Año:", anio);
  console.log("Hora:", hora);
  console.log("Minutos:", minutos);

  // También puedes crear un nuevo objeto Date solo con la información de día, mes, año, hora y minutos
  const nuevoObjetoFecha = new Date(anio, mes - 1, dia, hora, minutos); // Se resta 1 porque los meses van de 0 a 11

  // Muestra el nuevo objeto Date en la consola
  console.log("Nuevo Objeto Date:", nuevoObjetoFecha);
  if (compararFechaConActual(nuevoObjetoFecha)) {
    calcultarPrecio(nuevoObjetoFecha);
  }
}

function compararFechaConActual(fecha) {
  console.log("me llamo");
  // Obtén la fecha actual
  var fechaActual = new Date();
  console.log(fecha < fechaActual);

  // Compara la fecha proporcionada con la fecha actual
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
  var fechaActual = new Date();

  const diffTime = Math.abs(fechaActual - fecha);
  horasAparcado = Math.ceil(diffTime / (1000 * 60 * 60));
  while (diffHours >= 24) {
    diasAparcado++;
    horasAparcado = horasAparcado - 24;
  }
  console.log(
    "🚀 ~ file: index.js:58 ~ calcultarPrecio ~ diffHours:",
    horasAparcado
  );
}
