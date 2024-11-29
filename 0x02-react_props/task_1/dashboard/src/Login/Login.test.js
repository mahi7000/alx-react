import React from 'react';
import '../../config/setupTests';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });
    
    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 2 inputs and 2 labels', () => {
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});