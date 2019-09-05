import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import Footer from "../lib/Footer";
import {inject, observer} from "mobx-react";
import {Query} from 'react-apollo';
import {AUTHOR_DETAILS_QUERY, BOOK_DETAILS_QUERY} from '../../graphql';

@inject("authStore")
@withRouter
@observer
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: parseInt(this.props.match.params.bookId)
        }
    }

    componentDidMount() {
        document.title = 'Book Details'
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <Query query={BOOK_DETAILS_QUERY} variables={{id: this.state.bookID}}>
                        {({loading, error, data}) => {
                            if (loading) return (<div>Loading...</div>);
                            if (error) return error.message;
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 features section-description wow fadeIn">
                                            <h2><b><em>{data.book.title}</em></b> Details</h2>
                                            <NavLink to="/books">Book List</NavLink>
                                            <div className="divider-1">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 features-box wow">
                                            <h3><b><em>{data.book.author.name}</em></b> author related books:</h3>
                                            <ul className="list-group">
                                                {data.book.author.books.map(book => (
                                                    <li className="list-group-item" key={book.id}>
                                                        <NavLink to={'/author/' + data.book.author.id}>{book.title}
                                                            <span className="badge pull-right">{book.generic}</span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                    </Query>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;
