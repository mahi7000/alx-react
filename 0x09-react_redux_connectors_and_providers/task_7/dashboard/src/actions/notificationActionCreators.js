import * as notifsActionTypes from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: notifsActionTypes.MARK_AS_READ,
    index
  };
}
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));



export function setNotificationFilter(filter) {
  return {
    type: notifsActionTypes.SET_TYPE_FILTER,
    filter
  };
}
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (isLoading) => ({
  type: notifsActionTypes.SET_LOADING_STATE,
  isLoading,
});
export const boundSetLoadingState = (isLoading) => (dispatch) => dispatch(setLoadingState(isLoading));

export const setNotifications = (notifications) => ({
  type: notifsActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});
export const boundSetNotifications = (notifications) => (dispatch) => dispatch(setNotifications(notifications));

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));

    fetch('/notifications.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setNotifications(data));
      })
      .catch((error) => {
        console.error('Failed to fetch notifications', error);
      })
      .finally(() => {
        dispatch(setLoadingState(false));
      });
  };
}