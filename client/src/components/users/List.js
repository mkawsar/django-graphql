import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Footer from "../lib/Footer";

class List extends Component {
    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>User List</h2>
                                <p>Hello world</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default List;
