import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {Query} from 'react-apollo';
import {AUTHORS_QUERY} from '../../graphql';
import Footer from "../lib/Footer";

class List extends Component {
    componentDidMount() {
        document.title = 'Author List'
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Author List</h2>
                                <NavLink to="/author/create">Create</NavLink>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 features-box wow">
                                <Query query={AUTHORS_QUERY}>
                                    {({loading, error, data}) => {
                                        if (loading) {
                                            return (<div>Loading authors...</div>);
                                        }
                                        if (error) {
                                            return (`Error! ${error.message}`);
                                        }
                                        return (
                                            <ul className="list-group">
                                                {data.authors.map(author => (
                                                    <li className="list-group-item" key={author.id}>
                                                        <NavLink to={'/author/' + author.id}>{author.name}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
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