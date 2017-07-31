import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postComments from './comments';
import likes from './likes';
import embedLink from './embedder';

const rootReducer = combineReducers({postComments, likes, embedLink, routing: routerReducer});

export default rootReducer;
