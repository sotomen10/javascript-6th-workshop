console.log("Mensaje 1: Inmediatamente");

// Este mensaje se programa para mostrarse después de 0 segundos
setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

// Este mensaje se programa para mostrarse después de 1 segundo
setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

// ¿Por qué el "Mensaje 2: Con timeout de 0 segundos" no aparece justo después del "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?

// Aunque se le indica a `setTimeout` que ejecute el código después de 0 segundos, el mensaje no se muestra inmediatamente. Esto es porque `setTimeout` coloca el código en una cola para ejecutarse más tarde, después de que el código actual y cualquier tarea urgente (como las promesas) hayan terminado.

// ¿Qué nos dice este comportamiento sobre el Event Loop, las macrotareas y las microtareas en JavaScript?

// El Event Loop gestiona cómo y cuándo se ejecutan las tareas. Las tareas de `setTimeout` (macrotareas) se ejecutan después de que se haya completado todo el código actual y las microtareas (como las promesas). Esto asegura que las operaciones se manejen de manera ordenada y sin bloquear el hilo principal.
