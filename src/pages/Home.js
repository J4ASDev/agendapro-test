import React, { Component } from 'react';
import HomeLayout from '../components/Home';

import { connect } from 'react-redux';
import { getBookings }  from '../actions/home';

class Home extends Component {

  handleBookingUpdate = () => console.log('Clicked');

  render() {
    const { bookings } = this.props;
    return (
      <HomeLayout
        bookings={bookings}
        handleBookingUpdate={this.handleBookingUpdate}
      />
    )
  }

  componentDidMount() {
    this.props.getBookings(69197);
  }
}

const mapStateToProps = ({ home }) => ({
  bookings: home.bookings
});

const mapDispatchToProps = {
  getBookings
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
