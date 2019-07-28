import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/home';
import HomeLayout from '../components/Home';

class Home extends Component {
  idStatusLists = {
    droppable: 'bookings',
    droppable2: 'selected',
    droppable3: 'selected2',
  };

  getList = id => this.props[this.idStatusLists[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    const { reorderBookingsDnd, moveBookingsDnd } = this.props.actions;

    // dropped outside the list
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const idList = source.droppableId;
      const listBookings = this.getList(idList);
      const sourceIndex = source.index;
      const destIndex = destination.index;

      reorderBookingsDnd(idList, listBookings, sourceIndex, destIndex);

    } else {
      const listBookingsSource = this.getList(source.droppableId);
      const listBookingsDest = this.getList(destination.droppableId);

      moveBookingsDnd(listBookingsSource, listBookingsDest, source, destination);
    }
  };

  render() {
    const { bookings, selected, selected2 } = this.props;
    return (
      <HomeLayout
        selected={selected}
        selected2={selected2}
        bookings={bookings}
        onDragEnd={this.onDragEnd}
      />
    )
  }

  componentDidMount() {
    this.props.actions.getBookings(69197);
  }
}

Home.propTypes = {
  bookings: PropTypes.array
};

const mapStateToProps = ({ home }) => ({
  bookings: home.droppable,
  selected: home.droppable2,
  selected2: home.droppable3,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
