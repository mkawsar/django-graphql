import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactRouter from './routers';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ReactRouter />
        </Router>
    </ApolloProvider>, document.getElementById('app')
);
