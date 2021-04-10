import { combineReducers } from 'redux';
import system from './system/SystemReducer';
import user from './user/UserReducer';

export default combineReducers({
	system,
	user
});