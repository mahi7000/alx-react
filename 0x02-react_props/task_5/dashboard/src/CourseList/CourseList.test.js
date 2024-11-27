import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe('CourseList component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toBeDefined();
    })

    it('renders 5 rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    })

    test('renders correctly with an empty array or without listCourses', () => {
        const wrapperEmpty = shallow(<CourseList listCourses={[]} />);
        expect(wrapperEmpty.text()).toContain('No course available');

        const wrapperUndefined = shallow(<CourseList />);
        expect(wrapperUndefined.text()).toContain('No course available');
    });

    test('renders courses correctly when a list is passed', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];

        const wrapper = shallow(<CourseList listCourses={courses} />);
        expect(wrapper.find('CourseListRow').length).toBe(courses.length); // Assuming 'CourseListRow' is the component used to display courses
        expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell')).toEqual(courses[0].name);
        expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual(courses[1].name);
        expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual(courses[2].name);
    })
})