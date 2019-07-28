import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  REORDER_BOOKINGS_DND,
  MOVE_BOOKINGS_DND_SUCCESS,
  MOVE_BOOKINGS_DND_FAILED,
  CANCEL_BOOKING_FAILED
} from '../libs/actionsTypes';

const initialState = {
  allBookings: [],
  reserved: [],
  confirmed: [],
  attends: [],
  canceled: [],
  notAttends: [],
  standby: [],
  pending: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_BOOKINGS_SUCCESS: {
      const {
        bookings,
        reserved,
        confirmed,
        attends,
        canceled,
        notAttends,
        standby,
        pending
      } = action.payload;

      return {
        ...state,
        allBookings: bookings,
        reserved,
        confirmed,
        attends,
        canceled,
        notAttends,
        standby,
        pending
      };
    }

    case REORDER_BOOKINGS_DND: {
      const { idList, bookings } = action.payload;

      return {
        ...state,
        [idList]: bookings
      }
    }

    case MOVE_BOOKINGS_DND_SUCCESS: {
      const { idListSource, sourceBookings, idListDest, destBookings } = action.payload;

      return {
        ...state,
        [idListSource]: sourceBookings,
        [idListDest]: destBookings
      };
    }

    case GET_BOOKINGS_FAILED:
    case MOVE_BOOKINGS_DND_FAILED:
    case CANCEL_BOOKING_FAILED:
    default:
      return state;
  }
}
