import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject("commonStore", "authStore")
@withRouter
@observer

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }
    active = {
        fontWeight: "bold",
        color: "red"
    };

    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none"
    };

    handleClickLogout() {
        this.props.authStore.userLogout();
        this.props.history.replace('/');
    }

    renderRegisterButton() {
        if (this.props.authStore.isLoggedIn !== true) {
            return (
                <li><NavLink to="/register" activeStyle={this.active}>Register</NavLink></li>
            );
        }
    }

    userList() {
        if (this.props.authStore.isLoggedIn === true) {
            return (
                <li><NavLink to="/user/list" activeStyle={this.active}>Users</NavLink></li>
            );
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top navbar-no-bg" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="javascript:void(0)">{this.props.commonStore.appName}</a>
                        </div>
                        <div className="collapse navbar-collapse" id="top-navbar-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink exact to="/" activeStyle={this.active}>Home</NavLink></li>
                                <li><NavLink to="/authors" activeStyle={this.active}>Authors</NavLink></li>
                                <li><NavLink to="/books" activeStyle={this.active}>Books</NavLink></li>
                                {this.userList()}
                                {this.props.authStore.isLoggedIn === true ? (
                                    <li><a href="javascript:void(0)" onClick={this.handleClickLogout}>Logout</a></li>
                                ) : (
                                        <li><NavLink to="/login" activeStyle={this.active}>Login</NavLink></li>
                                    )
                                }
                                {this.renderRegisterButton()}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text wow fadeInLeft">
                                <h1>{this.props.commonStore.appName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
