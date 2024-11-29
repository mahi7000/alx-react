import React from 'react';

function NotificationItem({type, html, value}) {
    return (
        <li data-notification-type={type}>
            {value}
            <span dangerouslySetInnerHTML={{ __html: html }}/>
        </li>
    );
};

export default NotificationItem;