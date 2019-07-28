import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/home';
import HomeLayout from '../components/Home';

class Home extends Component {
  idStatusLists = {
    reserved: 'reserved',
    confirmed: 'confirmed',
    attends: 'attends',
    canceled: 'canceled',
    notAttends: 'notAttends',
    standby: 'standby',
    pending: 'pending'
  };

  getList = id => this.props[this.idStatusLists[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    const { reorderBookingsDnd, moveBookingsDnd } = this.props.actions;

    // dropped outside the list
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      reorderBookingsDnd(
        source.droppableId,
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
    } else {
      moveBookingsDnd(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
    }
  };

  render() {
    const { reserved, confirmed, attends, canceled, notAttends, standby, pending } = this.props;
    return (
      <HomeLayout
        reserved={reserved}
        confirmed={confirmed}
        attends={attends}
        canceled={canceled}
        notAttends={notAttends}
        standby={standby}
        pending={pending}
        onDragEnd={this.onDragEnd}
      />
    )
  }

  componentDidMount() {
    this.props.actions.getBookings(69197);
  }
}

Home.propTypes = {
  reserved: PropTypes.array,
  confirmed: PropTypes.array,
  attends: PropTypes.array,
  canceled: PropTypes.array,
  notAttends: PropTypes.array,
  standby: PropTypes.array,
  pending: PropTypes.array
};

const mapStateToProps = ({ home }) => ({
  reserved: home.reserved,
  confirmed: home.confirmed,
  attends: home.attends,
  canceled: home.canceled,
  notAttends: home.notAttends,
  standby: home.standby,
  pending: home.pending
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
