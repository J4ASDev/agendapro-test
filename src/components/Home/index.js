import React from 'react';
import PropTypes  from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import BookingsWrapper from './Bookings';

const HomeLayout = ({
  reserved,
  confirmed,
  attends,
  canceled,
  notAttends,
  standby,
  pending,
  onDragEnd
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <BookingsWrapper droppableId='reserved' bookings={reserved} />
    <BookingsWrapper droppableId='confirmed' bookings={confirmed} />
    <BookingsWrapper droppableId='attends' bookings={attends} />
    <BookingsWrapper droppableId='canceled' bookings={canceled} />
    <BookingsWrapper droppableId='notAttends' bookings={notAttends} />
    <BookingsWrapper droppableId='standby' bookings={standby} />
    <BookingsWrapper droppableId='pending' bookings={pending} />
  </DragDropContext>
);

HomeLayout.propTypes = {
  reserved: PropTypes.array,
  confirmed: PropTypes.array,
  attends: PropTypes.array,
  canceled: PropTypes.array,
  notAttends: PropTypes.array,
  standby: PropTypes.array,
  pending: PropTypes.array
};

export default HomeLayout;
