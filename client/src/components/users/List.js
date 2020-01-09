import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Footer from "../lib/Footer";
import { Query } from 'react-apollo';
import { USERS_QUERY } from '../../graphql';
import { inject, observer } from "mobx-react";

@inject("authStore")
@withRouter
@observer

class List extends Component {

	render() {
		return (
			<div>
				<div className="features-container section-container">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 features section-description wow fadeIn">
								<h2>User List</h2>
								{this.props.authStore.isLoggedIn === true ? (
									<NavLink to="/user/create">Create</NavLink>
								) : null}
								<Query query={USERS_QUERY}>
									{({ loading, data, error }) => {
										if (loading) {
											return (<div>Loading users...</div>);
										}
										if (error) {
											return (`Error! ${error.message}`);
										}
										return (
											<div className="table-responsive">
												<table className="table table-hover">
													<thead>
														<tr>
															<td>#</td>
															<td>Name</td>
															<td>Email</td>
															<td>Username</td>
															<td>Action</td>
														</tr>
													</thead>
													<tbody>
														{data.users.map(user => (
															<tr key={user.id}>
																<td>{user.id}</td>
																<td>{user.firstName}</td>
																<td>{user.email}</td>
																<td>{user.username}</td>
																<td>Action</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										)
									}}
								</Query>
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
