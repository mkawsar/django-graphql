import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Footer from "../lib/Footer";
import {Query} from "react-apollo";
import {BOOK_LIST_QUERY} from '../../graphql';
import {inject, observer} from "mobx-react";

@inject("authStore")
@withRouter
@observer
class List extends Component {
    componentDidMount() {
        document.title = 'Book List';
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Book List</h2>
                                {this.props.authStore.isLoggedIn === true ? (
                                    <NavLink to="/book/create">Create</NavLink>
                                ) : null }
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 features-box wow">
                                <Query query={BOOK_LIST_QUERY}>
                                    {({loading, error, data}) => {
                                        if (loading) return null;
                                        if (error) {
                                            return `Error! ${error.message}`
                                        } else {
                                            return (
                                                <ul className="list-group">
                                                    {data.bookList.map(book => (
                                                        <li className="list-group-item" key={book.id}>
                                                            <NavLink to={'/book/details/' + book.id}>{book.title}</NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                    }}
                                </Query>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default List;