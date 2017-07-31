import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
);

const ala = ['y45gthg']

const defaultState = {
    video,
    comments
}


const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}
console.log(store.getState())
export default store;
