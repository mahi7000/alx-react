import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <div className='Notifications' style={{ display: 'flex' }}>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
            <button
                className='CloseButton'
                style={{ marginLeft: 'auto' }}
                onClick={handleCloseClick}
                aria-label='Close'>
                <img src={closeIcon} alt='Close icon' />
            </button>
        </div>
    );
};

export default Notifications;