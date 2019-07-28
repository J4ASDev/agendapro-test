import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const BookingsWrapper = ({ droppableId, bookings, onCancelBooking }) => (
  <Droppable droppableId={droppableId}>
    { provided => (
      <div ref={provided.innerRef} className='bookings-wrapper'>
        <p> {droppableId.slice(0, -1)} {bookings.length}</p>
        { bookings.map((item, index) => {
          const { client, start, end, price, status, id } = item;
          const { first_name, last_name, email } = client;

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
                    <span>Last name:</span> <p>{last_name}</p>
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
                  <div>
                    <span>Status:</span> <p>{status}</p>
                  </div>
                  <button onClick={() => onCancelBooking(id, bookings, droppableId)}>
                    Cancel booking
                  </button>
                </div>
              )}
            </Draggable>
          )
        })}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default BookingsWrapper;
