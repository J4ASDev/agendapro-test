import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('#Home', () => {
  let props;
  let wrapper;

  beforeEach(()=> {
    props = {
      onCancelBooking: () => {},
      onDragEnd: () => {},
      onFilterDateByRange: () => {},
      reserved: [],
      confirmed: [],
      attends: [],
      notAttends: [],
      standby: [],
      pending: []
    };

    wrapper = shallow(<Home {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
