// Función para crear un contador con métodos para incrementar y obtener el valor
function crearContador() {
  let valor = 0; // Variable privada para almacenar el valor actual del contador
  
  return {
    // Método para incrementar el valor del contador
    incrementar: function() {
      valor++; // Aumenta el valor en 1
    },
    // Método para obtener el valor actual del contador
    obtenerValor: function() {
      return valor; // Devuelve el valor actual del contador
    }
  };
}

// Función principal para interactuar con el contador a través del usuario
function interactuarConContador() {
  const contador = crearContador(); // Crear una instancia del contador
  let continuar = true; // Variable para controlar el bucle de interacción

  // Bucle de interacción con el usuario
  while (continuar) {
    // Solicitar al usuario una opción para incrementar o salir
    let opcion = prompt(`El valor actual del contador es: ${contador.obtenerValor()}. ¿Deseas incrementarlo? (si/salir)`);
  
    if (opcion === "si") {
      // Si el usuario elige "si", incrementar el contador
      contador.incrementar();
    } else if (opcion === "salir" || opcion === null) {
      // Si el usuario elige "salir" o cancela el prompt, terminar el bucle
      continuar = false;
    } else {
      // Manejar opciones inválidas
      alert("Opción inválida. Por favor, ingresa 'si' para incrementar, o 'salir' para terminar.");
    }
  }

  // Mostrar el valor final del contador cuando termina la interacción
  alert(`Finalizando. El valor final del contador es: ${contador.obtenerValor()}.`);
}

// Llamar a la función principal para iniciar la interacción con el contador
interactuarConContador();
