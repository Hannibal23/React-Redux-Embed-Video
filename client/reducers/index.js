import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postComments from './comments';
import likes from './likes';

const rootReducer = combineReducers({postComments, likes, routing: routerReducer});

export default rootReducer;
