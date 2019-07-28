import { API } from '../libs/config';
import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  REORDER_BOOKINGS_DND,
  MOVE_BOOKINGS_DND,
  MOVE_BOOKINGS_DND_FAILED
} from '../libs/actionsTypes';

const options = typeMethod => {
  const username = '4fjf146';
  const password = '6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0';

  return {
    method: typeMethod,
    headers: { 'Authorization': `Basic ${btoa(`${username}:${password}`)}` }
  };
}

const filterBookings = (bookings, status) => {
  return bookings.filter(booking => booking.status_id === status);
}

export const getBookings = id => {
  return async dispatch => {
    try {
      const request = await fetch(`${API.AGENDAPRO}/clients/${id}/bookings`, options('GET'));
      const bookings = await request.json();

      const reserved = filterBookings(bookings, 1);
      const confirmed = filterBookings(bookings, 2);
      const attends = filterBookings(bookings, 3);
      const canceled = filterBookings(bookings, 5);
      const notAttends = filterBookings(bookings, 6);
      const standby = filterBookings(bookings, 7);
      const pending = filterBookings(bookings, 8);

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
    const idListClone = idList.slice(0, -1);
    const bookings = Array.from(listBookings);
    const [removed] = bookings.splice(startIndex, 1);
    bookings.splice(endIndex, 0, removed);

    return dispatch({
      type: REORDER_BOOKINGS_DND,
      payload: { bookings, idList: idListClone }
    });
  }
};

export const moveBookingsDnd = (source, destination, droppableSource, droppableDest) => {
  return async dispatch => {
    const idListSource = droppableSource.droppableId.slice(0, -1);
    const idListDest = droppableDest.droppableId.slice(0, -1);
    const sourceBookings = Array.from(source);
    const destBookings = Array.from(destination);

    try {
      const [removed] = sourceBookings.splice(droppableSource.index, 1);
      const idBooking = removed.id;
      const newStatus = droppableDest.droppableId.slice(-1);

      const request = await fetch(`${API.AGENDAPRO}/bookings/${idBooking}?status_id=${newStatus}`, options('PUT'));
      const booking = await request.json();
    
      destBookings.splice(droppableDest.index, 0, booking);

      return dispatch({
        type: MOVE_BOOKINGS_DND,
        payload: { idListSource, sourceBookings, idListDest, destBookings }
      });

    } catch(err) {
      return dispatch({
        type: MOVE_BOOKINGS_DND_FAILED,
      });
    }
  }
};
