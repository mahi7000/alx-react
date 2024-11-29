import React from 'react';
import '../../config/setupTests';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three NotificationItem items', () => {
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders text in p', () => {
        expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
    });

    it('renders the first html correctly', () => {
        const first = shallow(<NotificationItem type="default" value="New course available" />);
        expect(first.find('li').prop('data-priority')).toEqual('default');
        expect(first.find('li').text()).toEqual("New course available");
    });

    it('displays menu item when displayDrawer is false', () => {
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
        expect(wrapper.find("div.Notifications")).toHaveLength(0);
    });

    it('displays Notifications', () => {
        const wrap = shallow(<Notification displayDrawer={true} />);
        expect(wrap.find("div.menuItem")).toHaveLength(1);
        expect(wrap.find("div.Notifications")).toHaveLength(1);
    });
});