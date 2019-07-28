import { API } from '../libs/config';
import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  REORDER_BOOKINGS_DND,
  MOVE_BOOKINGS_DND
} from '../libs/actionsTypes';

export const filterBookings = (bookings, status) => {
  return bookings.filter(booking => booking.status === status);
}

export const getBookings = id => {
  return async dispatch => {
    try {
      const username = '4fjf146';
      const password = '6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0';

      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      };

      const request = await fetch(`${API.AGENDAPRO}/clients/${id}/bookings`, options);
      const bookings = await request.json();

      const reserved = filterBookings(bookings, 'Reservado');
      const confirmed = filterBookings(bookings, 'Confirmado');
      const attends = filterBookings(bookings, 'Asiste');
      const canceled = filterBookings(bookings, 'Cancelado');
      const notAttends = filterBookings(bookings, 'No Asiste');
      const standby = filterBookings(bookings, 'En Espera');
      const pending = filterBookings(bookings, 'Pendiente');

      return dispatch({
        type: GET_BOOKINGS_SUCCESS,
        payload: {
          bookings,
          reserved,
          confirmed,
          attends,
          canceled,
          notAttends,
          standby,
          pending
        }
      });
    } catch(err) {
      return dispatch({ type: GET_BOOKINGS_FAILED });
    }
  }
};

export const reorderBookingsDnd = (idList, listBookings, startIndex, endIndex) => {
  return dispatch => {
    const bookings = Array.from(listBookings);
    const [removed] = bookings.splice(startIndex, 1);
    bookings.splice(endIndex, 0, removed);

    return dispatch({
      type: REORDER_BOOKINGS_DND,
      payload: { bookings, idList }
    });
  }
};

export const moveBookingsDnd = (source, destination, droppableSource, droppableDest) => {
  return dispatch => {
    const idListSource = droppableSource.droppableId;
    const idListDest = droppableDest.droppableId;
    
    const sourceBookings = Array.from(source);
    const destBookings = Array.from(destination);
    const [removed] = sourceBookings.splice(droppableSource.index, 1);

    destBookings.splice(droppableDest.index, 0, removed);

    return dispatch({
      type: MOVE_BOOKINGS_DND,
      payload: { idListSource, sourceBookings, idListDest, destBookings }
    });
  }
};
