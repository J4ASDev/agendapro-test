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
    <BookingsWrapper droppableId='reserved1' bookings={reserved} />
    <BookingsWrapper droppableId='confirmed2' bookings={confirmed} />
    <BookingsWrapper droppableId='attends3' bookings={attends} />
    <BookingsWrapper droppableId='canceled5' bookings={canceled} />
    <BookingsWrapper droppableId='notAttends6' bookings={notAttends} />
    <BookingsWrapper droppableId='standby7' bookings={standby} />
    <BookingsWrapper droppableId='pending8' bookings={pending} />
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
