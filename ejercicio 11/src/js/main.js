import { validateCapacity, validateAvialability, addNewBooking, viewAllBooking, removeBooking } from "./basicCrud.js";

export const urlRooms = "http://localhost:3000/rooms";
const urlRoomTypes = "http://localhost:3000/roomTypes";
const secondsForViewInformation = 3;

// Esta función obtiene los datos de los endpoints de tipos de habitaciones y habitaciones
function mostrarData() {
  return Promise.all([
    new Promise((resolve, reject) => {
      // Simula un retraso antes de hacer la solicitud para obtener los tipos de habitación
      setTimeout(() => {
        fetch(urlRoomTypes)  // Realiza la solicitud para obtener los tipos de habitación
          .then((dataTypesOfRoom) => {
            if (!dataTypesOfRoom.ok) {
              // Si la respuesta no es correcta, rechaza la promesa con un mensaje de error
              reject(`Error al obtener datos de roomTypes: ${dataTypesOfRoom.status}`);
            } else {
              // Si la respuesta es correcta, resuelve la promesa con los datos en formato JSON
              resolve(dataTypesOfRoom.json());
            }
          }).catch(error => reject(`Error en la solicitud de roomTypes: ${error}`));
      }, 1000 * secondsForViewInformation);  // Espera un tiempo antes de ejecutar el código
    }), 
    new Promise((resolve, reject) => {
      // Simula un retraso antes de hacer la solicitud para obtener las habitaciones
      setTimeout(() => {
        fetch(urlRooms)  // Realiza la solicitud para obtener las habitaciones
          .then((dataRooms) => {
            if (!dataRooms.ok) {
              // Si la respuesta no es correcta, rechaza la promesa con un mensaje de error
              reject(`Error al obtener datos de rooms: ${dataRooms.status}`);
            } else {
              // Si la respuesta es correcta, resuelve la promesa con los datos en formato JSON
              resolve(dataRooms.json());
            }
          }).catch(error => reject(`Error en la solicitud de rooms: ${error}`));
      }, 1000 * secondsForViewInformation);  // Espera un tiempo antes de ejecutar el código
    })
  ]);
}

// Función principal para manejar la lógica de la aplicación
function main() {
  mostrarData().then((data) => {
    // Muestra en la consola los datos obtenidos para tipos de habitación y habitaciones
    console.table(data[0]);
    console.table(data[1]);

    let exit = false;  // Variable para controlar el bucle de opciones del usuario
    while (!exit) {
      // Muestra un menú al usuario y obtiene su selección
      const userInput = parseInt(prompt(
        "Selecciona una opción:\n1. Reservar\n2. Ver Reservas\n3. Cancelar Reserva\n4. Salir"
      ));
      
      switch (userInput) {
        case 1:
          // Opción para realizar una reserva
          let numbreOfHabitation = parseInt(prompt("Número de habitación para reservar"));
          let capacity = parseInt(prompt("Número de personas en la habitación"));
          // Verifica si la capacidad es adecuada y si la habitación está disponible antes de crear la reserva
          if ((validateCapacity(data[1], data[0], numbreOfHabitation, capacity)) && validateAvialability(data[1], numbreOfHabitation)) {
            console.log(`Creando reserva`);
            addNewBooking(numbreOfHabitation, capacity);
          }
          break;

        case 2:
          // Opción para ver todas las reservas
          viewAllBooking();
          break;

        case 3:
          // Opción para cancelar una reserva
          let idBooking = parseInt(prompt(`ID de la reserva que deseas eliminar`));
          removeBooking(idBooking);
          break;

        case 4:
          // Opción para salir del programa
          alert("Gracias por usar el sistema. ¡Hasta luego!");
          exit = true;  // Sale del bucle
          break;

        default:
          // Mensaje de error si la opción ingresada no es válida
          alert("Opción no válida. Por favor, intenta nuevamente.");
      }
    }
  }).catch(error => console.error('Error al obtener datos:', error));  // Maneja errores al obtener los datos
}

main();  // Llama a la función principal para iniciar la aplicación



 


























// // Función para cargar y mostrar el contenido de ambos endpoints
// function cargarYMostrarData() {
//   // Retorna una nueva promesa que se resuelve después del setTimeout
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Realiza ambas solicitudes fetch en paralelo
//       Promise.all([fetch(urlRooms), fetch(urlRoomTypes)])
//         .then((responses) => {
//           // Verifica que ambas respuestas sean exitosas
//           responses.forEach((response) => {
//             if (!response.ok) {
//               throw new Error("Error al cargar los datos.");
//             }
//           });

//           // Convierte ambas respuestas a JSON
//           return Promise.all(responses.map((response) => response.json()));
//         })
//         .then((data) => {
//           console.log("Data recibida de rooms:", data[0]);
//           console.log("Data recibida de roomTypes:", data[1]);

//           const rooms = data[0];
//           const roomTypes = data[1];

//           console.log("Habitaciones:", rooms);
//           console.log("Tipos de Habitaciones:", roomTypes);
//           resolve({ rooms, roomTypes }); // Resuelve la promesa con los datos cargados
//         })
//         .catch((error) => {
//           console.error(error);
//           reject(error); // Rechaza la promesa si hay un error
//         });
//     }, 3000);
//   });
// }

// cargarYMostrarData()
//   .then((data) => {
//     console.log("Datos cargados:", data);
//   })
//   .catch((error) => {
//     console.error("Error al cargar los datos:", error);
//   });




















// Llamar a la función para cargar y mostrar el contenido de data.json
// cargarYMostrarData()
//   .then(({ rooms, roomTypes }) => {
//     // Mostrar el contenido de las habitaciones después de cargar los datos

//     // ... Continuar con la lógica de la app
//     while (true) {
//       const userInput = prompt(
//         "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Salir"
//       );
//       switch (userInput) {
//         case "1":
//           const userInput2 = prompt(
//             "Ingrese el numero de habitacion a reservar: " +
//               rooms
//                 .map((room) => {
//                   return `\nRoom Number: ${room.number} (${
//                     roomTypes.find((type) => type.id === room.roomTypeId).name
//                   })`;
//                 })
//                 .join(", ")
//           );
//           break;
//         case "2":
//           // Lógica para ver reservas actuales
//           break;
//         case "3":
//           // Lógica para cancelar reservas
//           break;
//         case "4":
//           // Salir del programa
//           return;
//         default:
//           console.log("Opción inválida. Inténtalo de nuevo.");
//       }
//     }
//   })
//   .catch((error) => {
//     console.error("Error al manejar la promesa:", error);
//   });

