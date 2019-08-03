import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/lib/Header';
import {Login, Register} from '../components/auth';
import Home from "../components/home/Home";
import {AuthorList} from '../components/author'


class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" header='Home' component={Home} />
                    <Route path="/login" header='Login' component={Login} />
                    <Route path="/register" header='Register' component={Register} />
                    <Route path="/authors" header='Authors' component={AuthorList} />
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
