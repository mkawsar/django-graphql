import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ReactRouter from './routers';

ReactDOM.render(
    <Router>
        <ReactRouter />
    </Router>, document.getElementById('app')
);
