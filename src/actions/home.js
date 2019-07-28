import { API } from '../libs/config';
import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  REORDER_BOOKINGS_DND,
  MOVE_BOOKINGS_DND
} from '../libs/actionsTypes';

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
      
      return dispatch({
        type: GET_BOOKINGS_SUCCESS,
        payload: { bookings }
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
