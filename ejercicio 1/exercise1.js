// #### Ejercicio 1: Quiz sobre Scope

// Variable global accesible desde cualquier parte del código
var globalVariable = "Soy una variable global.";

function testScope() {
  // Variable local accesible solo dentro de esta función
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Variable de bloque accesible solo dentro de este bloque if
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

// Interacción con el usuario
// El script pregunta al usuario si puede acceder a las variables en distintas partes del código
let respuestaGlobal = prompt("¿Puedes acceder a `globalVariable` desde cualquier lugar del código? (Sí/No) Explica por qué.");
let respuestaFuncion = prompt("¿Puedes acceder a `functionVariable` fuera de la función `testScope`? (Sí/No) Explica por qué.");
let respuestaBloque = prompt("¿Puedes acceder a `blockVariable` fuera del bloque if? (Sí/No) Explica por qué.");

// Validación de respuestas y mostrar resultados
// Comprueba si las respuestas del usuario son correctas y muestra un mensaje correspondiente

if (respuestaGlobal.toLowerCase() === "sí") {
  console.log("Correcto. `globalVariable` es accesible desde cualquier parte del código.");
} else {
  console.log("Incorrecto. `globalVariable` es una variable global y puede ser accedida desde cualquier parte del código.");
}

if (respuestaFuncion.toLowerCase() === "no") {
  console.log("Correcto. `functionVariable` solo está disponible dentro de la función `testScope`.");
} else {
  console.log("Incorrecto. `functionVariable` está declarada dentro de la función `testScope`, por lo que solo puede ser accedida dentro de esa función.");
}

if (respuestaBloque.toLowerCase() === "no") {
  console.log("Correcto. `blockVariable` solo es accesible dentro del bloque if donde fue declarada.");
} else {
  console.log("Incorrecto. `blockVariable` está declarada dentro de un bloque `if`, por lo que solo puede ser accedida dentro de ese bloque.");
}

// Ejecuta la función para demostrar el alcance de las variables
console.log("Ejecutando testScope():");
testScope();



