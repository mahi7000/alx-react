import React from 'react';
import '../../config/setupTests'
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  
  it('contains Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains Footer component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('checks that CourseList is not displayed', () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  })

  it('checks isLoggedIn is true', () => {
    const wrap = shallow(<App isLoggedIn={true} />);
    expect(wrap.find(Login)).toHaveLength(0);
    expect(wrap.find(CourseList)).toHaveLength(1);
  })
});
