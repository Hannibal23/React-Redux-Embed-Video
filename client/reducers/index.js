import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postComments from './comments';
import likes from './likes';
import embed from './embedder';

const rootReducer = combineReducers({postComments, likes, embed, routing: routerReducer});

export default rootReducer;
