import React from 'react';
import '../../config/setupTests';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });
    
    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the text "copyright"', () => {
        expect(wrapper.text()).toContain(Copyright);
    });
});