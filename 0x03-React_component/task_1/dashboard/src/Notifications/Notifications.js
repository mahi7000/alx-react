import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationShape from './NotificationItemShape';
import PropTypes from 'prop-types';

function Notifications({displayDrawer = false, listNotifications = []}) {
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
                        {listNotifications.length === 0 ? (
                            <NotificationItem value='No new notification for now' />    
                        ) : (
                            listNotifications.map((notification) => {
                                return (
                                    <NotificationItem
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                    />
                                )
                            })
                        )}
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
    listNotifications: PropTypes.arrayOf(NotificationShape).isRequired,
};

export default Notifications;