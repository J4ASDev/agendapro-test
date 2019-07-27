import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px'
}

const HomeLayout = ({ bookings, handleBookingUpdate }) => (
  <div>
    { bookings.map(item => (
        <div key={item.id} style={styles} >
          <h3>Booking</h3>
          <p>{item.client.first_name}</p>
          <p>{item.client.last_name}</p>
          <p>{item.client.email}</p>
          <p>{item.start.slice(0, 10)}</p>
          <p>{item.end.slice(0, 10)}</p>
          <p>{item.price}</p>
          <p>{item.status}</p>
          <button onClick={handleBookingUpdate} >Cancel booking</button>
        </div>
    ))}
  </div>
);

HomeLayout.propTypes = {
  bookings: PropTypes.array
};

export default HomeLayout;
