import React, { Component } from 'react';
import HomeLayout from '../components/Home';

import { connect } from 'react-redux';
import { getBookings }  from '../actions/home';

class Home extends Component {
  render() {
    return (
      <HomeLayout />
    )
  }

  componentDidMount() {
    this.props.getBookings();
  }
}

const mapStateToProps = () => {

};

const mapDispatchToProps = {
  getBookings
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
