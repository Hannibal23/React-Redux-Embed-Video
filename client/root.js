import React from 'react';
import { render } from 'react-dom';
import css from './styles/bootstrap.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Main from './components/Main'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}></Route>
        </Router>
    </Provider>
)

render( router, document.getElementById('root'));
