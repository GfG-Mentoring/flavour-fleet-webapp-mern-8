import { combineReducers } from 'redux';
import { default as auth } from './auth';
import restaurants from './restaurants';

export default combineReducers({
  auth,
  restaurants,
});
