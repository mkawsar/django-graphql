import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import Footer from "../lib/Footer";
import {inject, observer} from "mobx-react";

@inject("authStore")
@withRouter
@observer
class Details extends Component {
    componentDidMount() {
        document.title = 'Book Details'
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Book Details</h2>
                                <NavLink to="/books">Book List</NavLink>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;