import React from 'react';
import './setupTests';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        expect(wrapper.find('li').length).toBe(3);
    });

    it('renders text in p', () => {
        expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
    });
});