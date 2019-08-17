import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../components/lib/Header';
import {
    Login,
    Register,
    PasswordReset
} from '../components/auth';
import Home from "../components/home/Home";
import {
    AuthorList,
    AuthorCreate,
    AuthorDetails
} from '../components/author';
import {
    BookList,
    BookCreate,
    BookDetails
} from '../components/book';


class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" header='Home' component={Home}/>
                    <Route path="/login" header='Login' component={Login}/>
                    <Route path="/register" header='Register' component={Register}/>
                    <Route path="/password" header='Password' component={PasswordReset}/>
                    <Route path="/authors" header='Authors' component={AuthorList}/>
                    <Route path="/author/create" header='Author Create' component={AuthorCreate}/>
                    <Route path="/author/:authorId" header='Author Details' component={AuthorDetails}/>
                    <Route path="/books" header="Book List" component={BookList}/>
                    <Route path="/book/create" header="Book Create" component={BookCreate}/>
                    <Route path="/book/details/:bookId" header="Book Create" component={BookDetails}/>
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
