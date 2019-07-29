import React from 'react';
import { shallow } from 'enzyme';
import Bookings from '../../components/Home/Bookings';

describe('#UI Booking', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      droppableId: 'bookingStatusId',
      bookings: [],
      onCancelBooking: () => {}
    };

    wrapper = shallow(<Bookings {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
