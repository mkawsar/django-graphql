import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Query} from 'react-apollo';
import {AUTHOR_DETAILS_QUERY} from '../../graphql';
import Footer from "../lib/Footer";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id)
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
                            if (loading) return null;
                            if (error) return `Error! ${error}`;
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 features section-description wow fadeIn">
                                            <h2>{data.author.name} Details</h2>
                                            <NavLink to="/author/create">Create</NavLink>
                                            <div className="divider-1">
                                                <div className="line"></div>
                                            </div>
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