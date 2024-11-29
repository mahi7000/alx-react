import React from 'react';
import '../../config/setupTests';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeDefined();
})