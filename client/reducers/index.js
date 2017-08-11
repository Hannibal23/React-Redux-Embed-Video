import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import comments from './comments';
import likes from './likes';
import embed from './embedder';

const rootReducer = combineReducers({comments, likes, embed, routing: routerReducer});

export default rootReducer;
