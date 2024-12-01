import React from "react";
import shallow from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('CourseListRow Component', () => {
    it('renders one cell with colspan = 2', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course List"/>)
        const cell = wrapper.find('th');
        expect(cell).toHaveLength(1);
        expect(cell.prop('colSpan')).toBe("2");
        expect(cell.text()).toBe("Couse List")
    })

    it('renders two cells when second cell is present', () => {
        const wrapper  = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second"/>);
        const cell = wrapper.find('th');
        expect(cell).toHaveLength(2);
        expect(cell.at(0).text()).toBe("First");
        expect(cell.at(1).text()).toBe("Second");
    })

    it('renders td elements within tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second"/>)
        const cells = wrapper.find('td');
        expect(cells).toHaveLength(2);
        expect(cells.at(0).text()).toBe("First");
        expect(cells.at(1).text()).toBe("Second");
    })
})