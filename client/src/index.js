import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import NotificationSystem from 'react-mobx-notification-system';
import NotificationStore from 'react-mobx-notification-system';
import {Provider} from "mobx-react";
import {ApolloProvider} from 'react-apollo';
import ReactRouter from './routers';
import {API_URL} from '../env';
import {commonStore, authStore} from './stores';

const client = new ApolloClient({
    uri: API_URL,
    onError: error => {
        NotificationStore.addNotification({
            title: 'Error',
            message: error.response.errors[0].message,
            level: 'error'
        });
    }
});

const stores = {
    commonStore,
    authStore
};

window._____APP_STATE_____ = stores;

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider {...stores}>
            <Router>
                <ReactRouter/>
                <NotificationSystem/>
            </Router>
        </Provider>
    </ApolloProvider>, document.getElementById('app')
);
