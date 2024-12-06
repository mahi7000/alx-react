import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

// Mock console.log
const originalConsoleLog = console.log;

beforeAll(() => {
    console.log = jest.fn();
});

afterAll(() => {
    console.log = originalConsoleLog;
});

// Test case for pure HTML
test('logs mount and unmount for pure HTML', () => {
    const Wrapped = WithLogging(() => <p>Hello, World!</p>);
    const wrapper = shallow(<Wrapped />);

    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
});

// Test case for a named component
test('logs mount and unmount for Login component', () => {
    const Login = () => <div>Login</div>;
    const Wrapped = WithLogging(Login);
    const wrapper = shallow(<Wrapped />);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
});