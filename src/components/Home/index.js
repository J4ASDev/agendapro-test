import React from 'react';
import PropTypes  from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import BookingsWrapper from './Bookings';

const HomeLayout = ({
  reserved,
  confirmed,
  attends,
  notAttends,
  standby,
  pending,
  onDragEnd,
  onCancelBooking
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <BookingsWrapper droppableId='reserved1' bookings={reserved} onCancelBooking={onCancelBooking} />
    <BookingsWrapper droppableId='confirmed2' bookings={confirmed} onCancelBooking={onCancelBooking} />
    <BookingsWrapper droppableId='attends3' bookings={attends} onCancelBooking={onCancelBooking} />
    <BookingsWrapper droppableId='notAttends6' bookings={notAttends} onCancelBooking={onCancelBooking} />
    <BookingsWrapper droppableId='standby7' bookings={standby} onCancelBooking={onCancelBooking} />
    <BookingsWrapper droppableId='pending8' bookings={pending} onCancelBooking={onCancelBooking} />
  </DragDropContext>
);

HomeLayout.propTypes = {
  onCancelBooking: PropTypes.func,
  onDragEnd: PropTypes.func,
  reserved: PropTypes.array,
  confirmed: PropTypes.array,
  attends: PropTypes.array,
  notAttends: PropTypes.array,
  standby: PropTypes.array,
  pending: PropTypes.array
};

export default HomeLayout;
