import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Query} from 'react-apollo';
import {AUTHOR_DETAILS_QUERY} from '../../graphql';
import Footer from "../lib/Footer";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.authorId)
        }
    }

    componentDidMount() {
        document.title = 'Author Details';
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <Query query={AUTHOR_DETAILS_QUERY} variables={{id: this.state.id}}>
                        {({loading, error, data}) => {
                            if (loading) return (<div>Loading...</div>);
                            if (error) return error.message;
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 features section-description wow fadeIn">
                                            <h2>{data.author.name} Details</h2>
                                            <small>Age: {data.author.age}</small>
                                            <br/>
                                            <NavLink to="/author/create">Create</NavLink>
                                            <div className="divider-1">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 features-box wow">
                                            <ul className="list-group">
                                                {data.author.books.map(book => (
                                                    <li className="list-group-item" key={book.id}>
                                                        <NavLink to={'/book/details/' + book.id}>{book.title}
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