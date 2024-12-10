import * as actions from '../actions/notificationActionTypes';
import { Map, setIn, set, mergeDeep } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState= Map({
  notifications: [],
  filter: actions.NotificationTypeFilters,
  loading: false,
});

export function notificationReducer(state=initialState, action={type: null}) {
  switch(action.type) {

    case actions.SET_LOADING_STATE:
      return set(state, 'loading', action.isLoading);

    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      const normData = notificationsNormalizer(action.notifications);
      return state.mergeDeep({
        notifications: Map(normData.notifications).map(notification =>
          notification.set('isRead', false)
        )
      })

    case actions.MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);

    case actions.SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);
    
    default:
      return state;

  }
}