import Footer from "../lib/Footer";
import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { NavLink } from "react-router-dom";
import NotificationStore from 'react-mobx-notification-system';
import { USER_REGISTRATION_MUTATION, USERS_QUERY } from '../../graphql'

export default class Create extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: ''
		};
		this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
		this.handleOnSubmitForm = this.handleOnSubmitForm.bind(this);
	}

	handleOnChangeInput(e) {
		e.preventDefault();
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleOnSubmitForm(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<div className="features-container section-container">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 features section-description wow fadeIn">
								<h2>User Create</h2>
								<NavLink to="/user/list">User List</NavLink>
								<div className="divider-1">
									<div className="line"></div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12 features-box wow">
								<Mutation mutation={USER_REGISTRATION_MUTATION} onCompleted={res => {
									NotificationStore.addNotification({
										title: 'Registration',
										message: 'User registration is successfully!',
										level: 'success'
									});
									this.props.history.replace('/user/list');
								}} refetchQueries={() => {
									return [{
										query: USERS_QUERY
									}]
								}}>
									{(createUser, { loading, data, error }) => {
										if (loading) {
											return (<div>Loading users...</div>);
										}
										if (error) {
											return NotificationStore.addNotification({
												title: 'Registration',
												message: error.message,
												level: 'error'
											})
										}
										return (
											<form className="form-horizontal" onSubmit={e => {
												e.preventDefault();
												createUser({
													variables: {
														firstName: this.state.firstName,
														lastName: this.state.lastName,
														email: this.state.email,
														username: this.state.username,
														password: this.state.password
													}
												})
											}}>
												<div className="form-group">
													<label className="control-label col-sm-3">First Name</label>
													<div className="col-sm-9">
														<input type="text" name="firstName" placeholder="First Name"
															className="form-control" required onChange={this.handleOnChangeInput} />
													</div>
												</div>
												<div className="form-group">
													<label className="control-label col-sm-3">Last Name</label>
													<div className="col-sm-9">
														<input type="text" name="lastName" placeholder="Last Name"
															className="form-control" required onChange={this.handleOnChangeInput} />
													</div>
												</div>
												<div className="form-group">
													<label className="control-label col-sm-3">Email</label>
													<div className="col-sm-9">
														<input type="email" name="email" placeholder="Email"
															className="form-control" required onChange={this.handleOnChangeInput} />
													</div>
												</div>
												<div className="form-group">
													<label className="control-label col-sm-3">Username</label>
													<div className="col-sm-9">
														<input type="text" name="username" placeholder="Username"
															className="form-control" required onChange={this.handleOnChangeInput} />
													</div>
												</div>

												<div className="form-group">
													<label className="control-label col-sm-3">Password</label>
													<div className="col-sm-9">
														<input type="password" name="password" placeholder="Password"
															className="form-control" required onChange={this.handleOnChangeInput} />
													</div>
												</div>
												<div className="form-group">
													<div className="col-sm-offset-3">
														<button className="btn btn-success btn-outline btn-lg">Save</button>
													</div>
												</div>
											</form>
										)
									}}
								</Mutation>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
