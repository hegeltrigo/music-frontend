import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { guests } from './guests.reducer';


const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  guests
});

export default rootReducer;
