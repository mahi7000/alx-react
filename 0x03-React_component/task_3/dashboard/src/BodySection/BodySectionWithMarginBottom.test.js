import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; 

describe('BodySectionWithMarginBottom Component', () => {
    test('renders BodySection and passes props correctly', () => {
        const title = "Test Title";
        const children = <p>Test children node</p>;

        const wrapper = shallow(
            <BodySectionWithMarginBottom title={title}>
                {children}
            </BodySectionWithMarginBottom>
        );

        // Check that BodySection is rendered
        const bodySection = wrapper.find(BodySection);
        expect(bodySection).toHaveLength(1); // Ensure there's one BodySection

        // Check that the props are passed correctly
        expect(bodySection.props().title).toBe(title); // Check the title prop
        expect(bodySection.props().children).toEqual(children); // Check the children prop
    });
});