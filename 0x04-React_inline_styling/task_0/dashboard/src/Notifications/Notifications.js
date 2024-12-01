import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleCloseClick = () => {
        console.log('Close button has been clicked');
    };

    markAsRead = (id) => {
        console.log(`Notification ${id } has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

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
                                            id={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={this.markAsRead}
                                        />
                                    )
                                })
                            )}
                        </div>
                        <button
                            className='CloseButton'
                            style={{ marginLeft: 'auto' }}
                            onClick={this.handleCloseClick}
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
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationShape).isRequired,
};

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
};

export default Notifications;