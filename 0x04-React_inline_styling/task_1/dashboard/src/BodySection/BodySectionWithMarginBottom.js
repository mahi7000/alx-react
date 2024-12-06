import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    bodySection: {
        marginBottom: '40px',
    },
});

const BodySectionWithMarginBottom = (props) => {
    return (
        <div className={css(styles.bodySection)}>
            <BodySection {...props} />
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    ...BodySection.propTypes,
}

export default BodySectionWithMarginBottom;