// 3.1 Crear una Función que Usa Closure
function crearSumador(numInicial) {
  // Retorna una nueva función que suma un número a numInicial
  return function(sumando) {
    return numInicial + sumando;
  };
}

// 3.2 Cómo Usar la Función y Ver Closures
// Crear una función que suma 5 a cualquier número dado
const sumarCinco = crearSumador(5);

// Usar la función para sumar 3 a 5
const resultado = sumarCinco(3);

// 3.3 Mostrar el Resultado
console.log("El resultado de sumar 5 + 3 es:", resultado); // Debería mostrar 8

// En JavaScript, las funciones pueden recordar las variables de su entorno incluso después de que la función principal haya terminado de ejecutarse. Este fenómeno se llama closure. Aquí está cómo funciona:

// 1. Contexto de Ejecución y Alcance
// Cada vez que se ejecuta una función, se crea un nuevo contexto de ejecución que define qué variables son accesibles. Este contexto es el alcance de la función.

// 2. ¿Qué Son los Closures?
// Un closure es cuando una función tiene acceso a las variables de la función en la que se creó, incluso después de que esa función haya terminado de ejecutarse. La función interna (la que se retorna) puede usar las variables de la función externa (la que la creó).

// 3. Cómo Mantiene el Alcance
// Cuando defines una función dentro de otra, la función interna sigue teniendo acceso a las variables de la función externa. Esto significa que:

// Variables Externas: La función interna puede usar y cambiar las variables de la función externa, incluso después de que la función externa haya terminado.

// Referencia Continua: La función interna mantiene una referencia a las variables de la función externa, permitiéndole acceder a esos valores en cualquier momento.
