import { API } from '../libs/config';
import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED
} from '../libs/actionsTypes';


export const getBookings = () => {
  return async dispatch => {
    console.log(API)
    
    return dispatch({
      type: GET_BOOKINGS_SUCCESS,
      payload: {}
    });
  }
}
