import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import BookingsWrapper from './Bookings';

const HomeLayout = ({ bookings, selected, selected2, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <BookingsWrapper droppableId='droppable' bookings={bookings} />
    <BookingsWrapper droppableId='droppable2' bookings={selected} />
    <BookingsWrapper droppableId='droppable3' bookings={selected2} />
  </DragDropContext>
);

export default HomeLayout;
