import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Footer from "../lib/Footer";

class Details extends Component {
    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Author Details</h2>
                                <NavLink to="/author/create">Create</NavLink>
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