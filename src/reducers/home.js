import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED
} from '../libs/actionsTypes';

const initialState = {
  bookings: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_BOOKINGS_SUCCESS: {
      const { bookings } = action.payload;

      return {
        bookings
      }
    }

    case GET_BOOKINGS_FAILED:
    default:
      return state;
  }
}
