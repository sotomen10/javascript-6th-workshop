import { urlRooms } from "./main.js";

let bookings = []; // Lista para almacenar las reservas.

let unicId = GenerateId();
function GenerateId() {
  let id = 0; // Inicializa el contador de IDs.
  return function () {
    return id++; // Retorna un nuevo ID único cada vez que se llama.
  };
}

export function validateAvialability(rooms, numbreOfHabitation) {
  let room = rooms.find(room => room.number === numbreOfHabitation); // Encuentra la habitación por número.
  if (room) {
    return room.availability; // Retorna la disponibilidad de la habitación.
  }
  return false; // La habitación no existe.
}

export function validateCapacity(rooms, roomTypes, numbreOfHabitation, capacity) {
  const room = rooms.find(room => room.number === numbreOfHabitation); // Encuentra la habitación por número.
  if (!room) {
    return false; // La habitación no se encontró.
  }

  const typeRoom = roomTypes.find(type => type.id == room.roomTypeId); // Encuentra el tipo de habitación.
  if (!typeRoom) {
    return false; // El tipo de habitación no se encontró.
  }

  return capacity <= typeRoom.capacity; // Verifica si la capacidad es adecuada.
}

export function addNewBooking(numberEntered, capacity) {
  let data = {
    "id": unicId(), // Asigna un ID único.
    "numberRoom": numberEntered, // Número de habitación.
    "totalPersons": capacity,
    "dateStart": new Date(prompt("Fecha de inicio (dd-mm-yyyy)")), // Solicita fecha de inicio.
    "dateEnd": new Date(prompt("Fecha de fin (dd-mm-yyyy)")), // Solicita fecha de fin.
  };

  bookings.push(data); // Añade la reserva a la lista.
  changeAvaliable(numberEntered) // Actualiza la disponibilidad.
    .then(() => alert('Reserva creada.'))
    .catch(() => alert('Error al actualizar disponibilidad.'));
}

export function viewAllBooking() {
  bookings.forEach(booking => {
    console.table(booking); // Muestra todas las reservas.
  });
}

function changeAvaliable(numberRoom) {
  return fetch(`${urlRooms}?number=${numberRoom}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        return Promise.reject('Habitación no encontrada.');
      }

      const room = data[0];
      const newAvailability = !room.availability; // Cambia la disponibilidad.

      return fetch(`${urlRooms}/${room.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ availability: newAvailability }) // Actualiza la disponibilidad.
      });
    })
    .then(response => {
      if (response.ok) {
        alert('Disponibilidad actualizada.');
      } else {
        alert('Error al actualizar disponibilidad.');
      }
    })
    .catch(() => alert('Error en la actualización de la habitación.'));
}

export function removeBooking(bookingId) {
  const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
  
  if (bookingIndex === -1) {
    alert('Reserva no encontrada.'); // Reserva no encontrada.
    return;
  }
  
  const numberRoom = bookings[bookingIndex].numberRoom;
  
  bookings.splice(bookingIndex, 1); // Elimina la reserva.
  
  changeAvaliable(numberRoom)
    .then(() => alert('Reserva eliminada.'))
    .catch(() => alert('Error al actualizar disponibilidad.'));
}
