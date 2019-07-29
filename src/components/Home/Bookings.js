import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const BookingsWrapper = ({ droppableId, bookings, onCancelBooking }) => (
  <Droppable droppableId={droppableId}>
    { provided => (
      <article>
        <h4> {droppableId.slice(0, -1)} {bookings.length}</h4>
        <div ref={provided.innerRef} className='bookings-wrapper'>
          { bookings.map((item, index) => {
            const { client: { first_name, email }, start, end, price, id } = item;

            return (
              <Draggable key={id} draggableId={id} index={index}>
                { provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='bookings'
                  >
                    <div>
                      <span>Name:</span> <p>{first_name}</p>
                    </div>
                    <div>
                      <span>Email:</span> <p>{email}</p>
                    </div>
                    <div>
                      <span>Start date:</span> <p>{start.slice(0, 10)}</p>
                    </div>
                    <div>
                      <span>End date:</span> <p>{end.slice(0, 10)}</p>
                    </div>
                    <div>
                      <span>Price:</span> <p>{price}</p>
                    </div>
                    <button onClick={() => onCancelBooking(id, bookings, droppableId)}>
                      Cancel booking
                    </button>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      </article>
    )}
  </Droppable>
);

BookingsWrapper.propTypes = {
  droppableId: PropTypes.string,
  bookings: PropTypes.array,
  onCancelBooking: PropTypes.func
};

export default BookingsWrapper;
