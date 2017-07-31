import React from 'react';
import { render } from 'react-dom';
import css from './styles/bootstrap.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';
import Popup from './components/Popup';
import Input from './components/Input';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Input}></IndexRoute>
                <Route path="/popup" component= {Popup}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
