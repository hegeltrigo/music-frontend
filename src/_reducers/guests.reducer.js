import { guestConstants } from '../_constants';

export function guests(state = {}, action) {
  switch (action.type) {
    case guestConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case guestConstants.GETALL_SUCCESS:
      return {
        items: action.guests
      };
    case guestConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
