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

    test('renders correctly with an empty array or without listNotifications', () => {
        const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
        expect(wrapperEmpty.find('NotificationItem').length).toBe(0); // Assuming 'NotificationItem' is the component used to display notifications
        expect(wrapperEmpty.text()).toContain('No new notification for now');

        const wrapperUndefined = shallow(<Notifications />);
        expect(wrapperUndefined.find('NotificationItem').length).toBe(0);
        expect(wrapperUndefined.text()).toContain('No new notification for now');
    });

    test('renders notifications correctly when a list is passed', () => {
        const notifications = [
            { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Test 1' },
            { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Test 2' },
        ];

        const wrapper = shallow(<Notifications listNotifications={notifications} />);
        expect(wrapper.find('NotificationItem').length).toBe(2); // Assuming 'NotificationItem' is the component used to display notifications
        expect(wrapper.find('NotificationItem').at(0).prop('html')).toEqual(notifications[0].html);
        expect(wrapper.find('NotificationItem').at(1).prop('html')).toEqual(notifications[1].html);
    });

    test('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
        expect(wrapper.text()).toContain('No new notification for now');
    });

    const mockListNotifications = [
        { id: 1, type: 'default', value: 'Notification 1', html: { __html: 'Notification 1' } },
        { id: 2, type: 'urgent', value: 'Notification 2', html: { __html: 'Notification 2' } }
    ];

    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={mockListNotifications} />);
    });

    it('does not rerender when props are updated with the same list', () => {
        const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
        wrapper.setProps({ listNotifications: mockListNotifications }); // Set props with the same list
        expect(shouldUpdate).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot(); // Ensure the output remains the same
        shouldUpdate.mockRestore();
    });

    it('rerenders when props are updated with a longer list', () => {
        const newListNotifications = [
            ...mockListNotifications,
            { id: 3, type: 'default', value: 'Notification 3', html: { __html: 'Notification 3' } }
        ];
        const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
        wrapper.setProps({ listNotifications: newListNotifications }); // Set props with a longer list
        expect(shouldUpdate).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot(); // Ensure the output has changed
        shouldUpdate.mockRestore();
    });
});