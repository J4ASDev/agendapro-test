import {
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  REORDER_BOOKINGS_DND,
  MOVE_BOOKINGS_DND
} from '../libs/actionsTypes';

const initialState = {
  droppable: [
    { id: 12350, service_provider_id: 690, service_id: 1255, location_id: 330, price: 50000, status_id: 5, service: 'Servicio de prueba', service_provider: 'Prueba React', status: 'Cancelado', location: 'Prueba React', start: '2019-08-17T18:59:00.000Z', end: '2019-08-17T19:59:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
    { id: 12343, service_provider_id: 690, service_id: 1306, location_id: 330, price: 50000, status_id: 5, service: 'Servicio Sesiones', service_provider: 'Prueba React', status: 'Cancelado', location: 'Prueba React', start: '2019-08-13T18:05:00.000Z', end: '2019-08-13T19:05:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
  ],
  droppable2: [
    { id: 12342, service_provider_id: 690, service_id: 1255, location_id: 330, price: 50000, status_id: 1, service: 'Servicio de prueba', service_provider: 'Prueba React', status: 'Reservado', location: 'Prueba React', start: '2019-08-10T14:25:00.000Z', end: '2019-08-10T15:25:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
    { id: 12332, service_provider_id: 690, service_id: 1255, location_id: 330, price: 20000, status_id: 2, service: 'Servicio de prueba', service_provider: 'Prueba React', status: 'Confirmado', location: 'Prueba React', start: '2019-08-18T15:24:00.000Z', end: '2019-08-18T16:24:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
  ],
  droppable3: [
    { id: 12222, service_provider_id: 690, service_id: 1255, location_id: 330, price: 50000, status_id: 1, service: 'Servicio de prueba', service_provider: 'Prueba React', status: 'Reservado', location: 'Prueba React', start: '2019-08-10T14:25:00.000Z', end: '2019-08-10T15:25:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
    { id: 11111, service_provider_id: 690, service_id: 1255, location_id: 330, price: 20000, status_id: 2, service: 'Servicio de prueba', service_provider: 'Prueba React', status: 'Confirmado', location: 'Prueba React', start: '2019-08-18T15:24:00.000Z', end: '2019-08-18T16:24:00.000Z', client: { id: 69197, first_name: 'Cliente', last_name: 'React2', email: 'clientereact2@agendapro.com', identification: '22.222.222-2' } },
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    // case GET_BOOKINGS_SUCCESS:
    case REORDER_BOOKINGS_DND: {
      const { idList, bookings } = action.payload;

      return {
        ...state,
        [idList]: bookings
      }
    }

    case MOVE_BOOKINGS_DND: {
      const { idListSource, sourceBookings, idListDest, destBookings } = action.payload;

      return {
        ...state,
        [idListSource]: sourceBookings,
        [idListDest]: destBookings
      };
    }

    case GET_BOOKINGS_FAILED:
    default:
      return state;
  }
}
