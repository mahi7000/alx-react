import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    table: {
        width: '100%',
        border: '1px solid ',
    },
    headerCell: {
        padding: '10px',
        borderBottom: '1px solid',
        textAlign: 'left',
        fontWeight: 'bold', // Added for header styling
    },
    bodyRow: {
        borderBottom: '1px solid',
    },
    bodyCell: {
        padding: '10px',
    },
    noCourse: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#888',
    },
});

function CourseList({listCourses = []}) {
    return (
        <table className={css(styles.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" className={css(styles.headerCell)}/>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" className={css(styles.headerCell)}/>
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow isHeader={false} textFirstCell="No course available" textSecondCell="" className={css(styles.noCourse)}/>
                ) : (
                    listCourses.map((course) => {
                        return (
                            <CourseListRow
                                key={course.id}
                                isHeader={false}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                className={css(styles.bodyRow)}
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