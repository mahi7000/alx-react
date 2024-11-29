import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({displayDrawer = false}) {
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer ? (
                <div className='Notifications'>
                    <div>
                        <p>Here is the list of notifications</p>
                        <ul>
                            <NotificationItem type="default" value="New course available" />
                            <NotificationItem type="urgent" value="New resume available" />
                            <NotificationItem type="urgent" html={getLatestNotification()} />
                        </ul>
                    </div>
                    <button
                        className='CloseButton'
                        style={{ marginLeft: 'auto' }}
                        onClick={handleCloseClick}
                        aria-label='Close'>
                        <img src={closeIcon} alt='Close icon' />
                    </button>
                </div>
            ) : (
                <> </>
            )}
            
        </>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

export default Notifications;