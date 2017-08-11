import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import { loadState, saveState} from './localStorage';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
);

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
    saveState(store.getState());
})

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;
