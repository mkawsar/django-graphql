import React, {Component} from 'react'

import {NavLink, withRouter} from "react-router-dom";
import {inject, observer} from 'mobx-react';

@inject("commonStore")
@withRouter
@observer

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 footer-copyright">
                            &copy; Bootstrap Navbar Template by <a href="javascript:void(0)">{this.props.commonStore.appCreator}</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
