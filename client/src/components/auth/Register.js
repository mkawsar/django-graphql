import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import NotificationStore from 'react-mobx-notification-system';
import {USER_REGISTRATION_MUTATION} from '../../graphql'

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
                            <Mutation mutation={USER_REGISTRATION_MUTATION} onCompleted={res => {
                                NotificationStore.addNotification({
                                    title: 'Registration',
                                    message: 'User registration is successfully!',
                                    level: 'success'
                                });
                                this.props.history.replace('/login');
                            }}>
                                {(createUser, {loading, data}) => {
                                    return (
                                        <form className="form-horizontal" autoComplete="off" onSubmit={e => {
                                            e.preventDefault();
                                            createUser({
                                                variables: {
                                                    firstName: this.state.f_name,
                                                    lastName: this.state.l_name,
                                                    username: this.state.username,
                                                    email: this.state.email,
                                                    password: this.state.password,
                                                }
                                            })
                                        }}>
                                            <div className="form-group">
                                                <label className="control-label col-sm-3">First Name</label>
                                                <div className="col-sm-9">
                                                    <input type="text" name="f_name" placcholder="First Name"
                                                           className="form-control" required
                                                           onChange={e => this.setState({f_name: e.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-sm-3">Last Name</label>
                                                <div className="col-sm-9">
                                                    <input type="text" name="l_name" placcholder="Last Name"
                                                           className="form-control" required
                                                           onChange={e => this.setState({l_name: e.target.value})}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label col-sm-3">Username</label>
                                                <div className="col-sm-9">
                                                    <input type="text" name="username" placcholder="Username"
                                                           className="form-control" required
                                                           onChange={e => this.setState({username: e.target.value})}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label col-sm-3">Email</label>
                                                <div className="col-sm-9">
                                                    <input type="email" name="email" placcholder="Email"
                                                           className="form-control" required
                                                           onChange={e => this.setState({email: e.target.value})}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="control-label col-sm-3">Password</label>
                                                <div className="col-sm-9">
                                                    <input type="password" name="password" placcholder="Password"
                                                           className="form-control" required
                                                           onChange={e => this.setState({password: e.target.value})}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <button className="btn btn-success">Submit</button>
                                            </div>
                                        </form>
                                    )
                                }}
                            </Mutation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}