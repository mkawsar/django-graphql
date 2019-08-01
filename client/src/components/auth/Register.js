import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject('authStore')
@withRouter
@observer
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Registration"
        };
    }

    componentDidMount() {
        document.title = this.state.title
    }

    render() {
        return (
            <div className="features-container section-container">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 features section-description wow fadeIn">
                            <form className="form-horizontal" autoComplete="off">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="name" placcholder="Name" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-3">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" name="email" placcholder="Email" className="form-control" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-3">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" name="password" placcholder="Password" className="form-control" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}