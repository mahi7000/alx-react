import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <div className='Notifications' style={{ display: 'flex' }}>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{
                        __html: getLatestNotification(),
                    }}
                />
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