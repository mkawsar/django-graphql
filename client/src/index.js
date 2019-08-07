import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {ApolloClient, ApolloLink, InMemoryCache, HttpLink} from 'apollo-boost';
import {onError} from 'apollo-link-error';
import NotificationSystem from 'react-mobx-notification-system';
import NotificationStore from 'react-mobx-notification-system';
import {Provider} from "mobx-react";
import {ApolloProvider} from 'react-apollo';
import ReactRouter from './routers';
import {API_URL} from '../env';
import {commonStore, authStore} from './stores';

/*
    Graphql endpoint url
 */

const httpLink = new HttpLink({
    uri: API_URL
});


const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    const token = localStorage.getItem('token');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: token ? `JWT ${token}` : ''
        }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

/**
 * Graphql apollo error handling
 * @type {ApolloLink}
 */

const errorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors) {
        for (let err of graphQLErrors) {
            NotificationStore.addNotification({
                title: 'Error',
                message: err.message,
                level: 'error'
            });
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(errorLink).concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache(),
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
