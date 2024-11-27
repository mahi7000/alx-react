import React from 'react';
import '../../config/setupTests';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
    let wrapper;

    it('renders without crashing', () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />)
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct type and value', () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />)
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
        expect(wrapper.find('li').text()).toContain('test');
    });

    it('renders correct html', () => {
        const htmlCont = { __html: <u>test</u> };
        wrapper = shallow(<NotificationItem type="default" value="test" html={htmlCont} />)
        expect(wrapper.find('span').prop('dangerouslySetInnerHTML')).toEqual(htmlCont);
    });
});