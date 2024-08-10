// Función para esperar un número específico de segundos antes de resolver la promesa
function esperarYSaludar(segundos) {
  return new Promise((resolve, reject) => {
    // Validar si el valor de segundos es un número positivo
    if (segundos <= 0 || isNaN(segundos)) {
      // Si no es válido, rechaza la promesa con un mensaje de error
      reject(new Error("Por favor, ingresa un número válido de segundos mayor que cero."));
    } else {
      // Si es válido, espera el tiempo especificado antes de resolver la promesa
      setTimeout(() => {
        resolve(`¡Han pasado ${segundos} segundos!`);
      }, segundos * 1000); // Convertir segundos a milisegundos para setTimeout
    }
  });
}

// Función para cargar datos desde una URL utilizando fetch
function cargarDatosDesdeURL(url) {
  return fetch(url)
    .then(response => {
      // Verificar si la respuesta HTTP es exitosa
      if (!response.ok) {
        // Si no es exitosa, lanzar un error con el estado HTTP
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Convertir la respuesta a formato JSON
      return response.json();
    })
    .catch(error => {
      // Manejar errores de la solicitud fetch y mostrar un mensaje en la consola
      console.error('¡Hubo un problema con la petición fetch:', error.message);
    });
}

// Función principal que interactúa con el usuario y maneja la lógica de las promesas
function interactuarConUsuario() {
  // Pedir al usuario que ingrese el número de segundos para esperar
  let segundos = prompt("Ingresa la cantidad de segundos después de los cuales quieres que se muestre un mensaje:");

  // Llamar a esperarYSaludar con el valor ingresado por el usuario
  esperarYSaludar(segundos)
    .then(mensaje => {
      // Mostrar el mensaje de saludo en la consola
      console.log(mensaje);
      // Cargar datos desde una URL y pasar el resultado a la siguiente promesa
      return cargarDatosDesdeURL('https://jsonplaceholder.typicode.com/posts');
    })
    .then(data => {
      // Mostrar los datos cargados exitosamente en la consola
      console.log("Datos cargados exitosamente:");
      console.log(data);
    })
    .catch(error => {
      // Manejar cualquier error ocurrido durante las promesas anteriores
      console.error('¡Hubo un problema:', error);
    });
}

// Llamar a la función principal para iniciar la interacción con el usuario
interactuarConUsuario();
