import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Footer from '../lib/Footer';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        document.title = 'Login'
    }


    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="features-container section-container">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 features section-description wow fadeIn">
                            <form className="form-horizontal" autoComplete="off">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" name="email" placcholder="Email" className="form-control" required onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-3">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" name="password" placcholder="Password" className="form-control" required onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}


export default Login;
