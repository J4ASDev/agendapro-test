import { API } from '../libs/config';
import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED
} from '../libs/actionsTypes';

export const getBookings = id => {
  return async dispatch => {
    try {
      const username = '4fjf146';
      const password = '6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0';

      const request = await fetch(`${API.AGENDAPRO}/clients/${id}/bookings`, {
        method: 'GET',
        headers: { 'Authorization': `Basic ${btoa(`${username}:${password}`)}` }
      });

      const data = await request.json();
      
      return dispatch({
        type: GET_BOOKINGS_SUCCESS,
        payload: {
          bookings: data
        }
      });
    } catch(err) {
      return dispatch({ type: GET_BOOKINGS_FAILED });
    }
  }
}
