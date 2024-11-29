import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type = "default", html, value, markAsRead = () => {}, id}) {
    const handleClick = () => {
         markAsRead(id);
    }
    return (
        <li data-notification-type={type}>
            {value}
            <span dangerouslySetInnerHTML={{ __html: html }}/>
        </li>
    );
};

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    markAsRead: PropTypes.func,
}

export default NotificationItem;