```markdown
# Solución Punto 10

## Capturas de Inicio de Script

A continuación se presentan las capturas de pantalla correspondientes al inicio del script:

![Captura 1](https://github.com/user-attachments/assets/0b7b5581-f1a4-4906-9d8a-1543bb7f45e8)
![Captura 2](https://github.com/user-attachments/assets/9c83c0ac-e48b-4888-8093-c19bc511597e)
![Captura 3](https://github.com/user-attachments/assets/c25ac601-5a03-4722-9d22-0f3b8fbcc1e7)
![Captura 4](https://github.com/user-attachments/assets/c4dfbc8d-fbdb-46cb-8b01-dd9e7965cf81)
![Captura 5](https://github.com/user-attachments/assets/43188b64-4e43-4511-b09d-5fbb3f98366c)
![Captura 6](https://github.com/user-attachments/assets/ebeabd1e-a3da-43a0-954c-b610b8128fcc)
![Captura 7](https://github.com/user-attachments/assets/f807fe04-48f7-4dd7-b22f-fbe25d046222)

## Comportamiento de Macrotareas y Microtareas en JavaScript

### Ejemplo de Código

El siguiente código ilustra cómo JavaScript gestiona las macrotareas y microtareas utilizando `setTimeout` y promesas:

```javascript
console.log("Inicio del script");

// Macrotareas: `setTimeout`
setTimeout(() => {
  console.log("Macrotarea con 1 segundo (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea con 0 segundos (setTimeout)");
}, 0);

// Microtareas: Promesas
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea dentro de Microtarea 1");
      return "desde micro 1";
    }, 0);
  })
  .then((mensaje) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtareas: Promesas
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");
```

### Respuestas a las Preguntas

1. **¿Qué tareas se consideran macrotareas y cuáles son microtareas?**
   - **Macrotareas**: Las tareas programadas con `setTimeout` son macrotareas. En este caso:
     - `setTimeout(() => {...}, 1000)`
     - `setTimeout(() => {...}, 0)`
   - **Microtareas**: Las tareas asociadas a las promesas (`.then()`) son microtareas. En este caso:
     - `.then()` dentro de `Promise.resolve()`

2. **¿Cómo se relacionan las macrotareas y microtareas con el event loop?**
   - El event loop gestiona las macrotareas y microtareas en orden secuencial.
   - Las macrotareas se ejecutan después de que el stack esté vacío.
   - Las microtareas se ejecutan justo después de la resolución de las promesas y antes de procesar las siguientes macrotareas.

3. **¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?**
   - La nueva macrotarea se añade a la cola después de que se completen todas las microtareas actuales.
   - Su ejecución se programará para más adelante, dependiendo de las macrotareas que estén en la cola.

4. **¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?**
   - **Promesas**: Las promesas se procesan como microtareas, lo que asegura que se ejecutan en el orden correcto antes de pasar a las macrotareas.
   - **setTimeout**: Las funciones con `setTimeout` se consideran macrotareas y se ejecutan tras completar las microtareas pendientes.

Este comportamiento permite que JavaScript maneje operaciones asíncronas de manera efectiva, asegurando un rendimiento fluido y una experiencia de usuario sin interrupciones.
```