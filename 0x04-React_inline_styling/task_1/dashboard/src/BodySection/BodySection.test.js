import React from "react";
import { shallow } from 'enzyme';
import './BodySection';
import BodySection from "./BodySection";

describe('BodySection component', () => {
    it('renders the children and title correctly', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>);

            const titleElement = wrapper.find('h2');
            expect(titleElement).toHaveLength(1);
            expect(titleElement.text()).toBe('test title');

            const childrenElement = wrapper.find('p');
            expect(childrenElement).toHaveLength(1);
            expect(childrenElement.text()).toBe('test children node');
    });
})