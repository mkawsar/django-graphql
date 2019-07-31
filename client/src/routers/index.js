import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/lib/Header';
import Login from '../components/auth/Login';
import Home from "../components/home/Home";


class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" header='Home' component={Home} />
                    <Route path="/login" header='Home' component={Login} />
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
