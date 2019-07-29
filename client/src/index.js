import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactRouter from './routers';
import { API_URL } from '../env';

const client = new ApolloClient({
    uri: API_URL
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ReactRouter />
        </Router>
    </ApolloProvider>, document.getElementById('app')
);
