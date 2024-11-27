import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import './CourseList.css';

function CourseList({listCourses = []}) {
    return (
        <table className="styled-table">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow isHeader={false} textFirstCell="No course available" textSecondCell="" />
                ) : (
                    listCourses.map((course) => {
                        return (
                            <CourseListRow
                                key={course.id}
                                isHeader={false}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                            />
                        )
                    })
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape).isRequired,
}

export default CourseList;