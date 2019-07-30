import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import NotificationSystem from 'react-mobx-notification-system';
import NotificationStore from 'react-mobx-notification-system';
import { ApolloProvider } from 'react-apollo';
import ReactRouter from './routers';
import { API_URL } from '../env';

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

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ReactRouter />
            <NotificationSystem />
        </Router>
    </ApolloProvider>, document.getElementById('app')
);
