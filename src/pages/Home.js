import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/home';
import HomeLayout from '../components/Home';

class Home extends Component {
  idStatusLists = {
    reserved1: 'reserved',
    confirmed2: 'confirmed',
    attends3: 'attends',
    notAttends6: 'notAttends',
    standby7: 'standby',
    pending8: 'pending'
  };

  getList = id => this.props[this.idStatusLists[id]];

  onDragEnd = ({ source, destination, draggableId: dragBookingId }) => {
    const { reorderBookingsDnd, moveBookingsDnd } = this.props.actions;
    const sourceDropId = source.droppableId;
    const destDropId = destination.droppableId;
    const sourceDropList = this.getList(sourceDropId);
    const destDropList = this.getList(destDropId);

    // dropped outside the list
    if (!destination) return;

    if (sourceDropId === destDropId) {
      reorderBookingsDnd(
        sourceDropId,
        sourceDropList,
        source.index,
        destination.index
      );
    } else {
      const booking = sourceDropList.find(booking => booking.id === dragBookingId);
      const bookingDate = new Date(booking.start.slice(0, 10));
      const currentDate = new Date();

      if (bookingDate >= currentDate) {
        moveBookingsDnd( sourceDropList, destDropList, source, destination );
      } else {
        console.log('Given date is not greater than the current date');
      }
    }
  };

  onCancelBooking = (id, bookings, idList) => {
    this.props.actions.cancelBooking(id, bookings, idList);
  }

  onFilterDateByRange = event => {
    event.preventDefault();

    const { getBookings } = this.props.actions;

    const form = document.getElementById('form-filter-date');
    const data = new FormData(form);
    const rangeFrom = data.get('range-from');
    const rangeTo = data.get('range-to');

    if (rangeFrom && rangeTo) return getBookings(69205, rangeFrom, rangeTo);

    return getBookings(69205);
  }

  render() {
    const { reserved, confirmed, attends, notAttends, standby, pending } = this.props;
    return (
      <HomeLayout
        reserved={reserved}
        confirmed={confirmed}
        attends={attends}
        notAttends={notAttends}
        standby={standby}
        pending={pending}
        onFilterDateByRange={this.onFilterDateByRange}
        onCancelBooking={this.onCancelBooking}
        onDragEnd={this.onDragEnd}
      />
    );
  }

  componentDidMount() {
    this.props.actions.getBookings(69205);
  }
}

Home.propTypes = {
  reserved: PropTypes.array,
  confirmed: PropTypes.array,
  attends: PropTypes.array,
  notAttends: PropTypes.array,
  standby: PropTypes.array,
  pending: PropTypes.array,
  actions: PropTypes.object,
  getBookings: PropTypes.func,
  cancelBooking: PropTypes.func,
  reorderBookingsDnd: PropTypes.func,
  moveBookingsDnd: PropTypes.func
};

const mapStateToProps = ({ home }) => ({
  reserved: home.reserved,
  confirmed: home.confirmed,
  attends: home.attends,
  notAttends: home.notAttends,
  standby: home.standby,
  pending: home.pending
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
