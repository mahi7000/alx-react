import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type = "default", html, value}) {
    return (
        <li data-notification-type={type}>
            {value}
            <span dangerouslySetInnerHTML={{ __html: html }}/>
        </li>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
}

export default NotificationItem;