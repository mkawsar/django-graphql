import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Footer from '../lib/Footer';

class PasswordReset extends Component {
    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Forgot Password</h2>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 features-box wow fadeInLeft">
                                <div className="row">
                                    <form id="forgot-password" className="form-horizontal">
                                        <div className="form-group">
                                            <label className="control-label col-sm-3">Email</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="email" placcholder="Email"
                                                    className="form-control" required
                                                    onChange={e => this.setState({ email: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-3">
                                            </div>
                                            <div className="col-sm-9">
                                                <button className="btn btn-success pull-left">Submit</button>
                                                <NavLink to="/login">Login</NavLink>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PasswordReset;
