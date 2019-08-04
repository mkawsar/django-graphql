import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import NotificationStore from "react-mobx-notification-system";
import Footer from "../lib/Footer";
import {CREATE_AUTHOR_MUTATION} from '../../graphql';

class Create extends Component {
    componentDidMount() {
        document.title = 'Author Create'
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Author Create</h2>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 features-box wow">
                                <Mutation mutation={CREATE_AUTHOR_MUTATION} onCompleted={res => {
                                    NotificationStore.addNotification({
                                        title: 'Registration',
                                        message: 'Author created is successfully!',
                                        level: 'success'
                                    });
                                    this.props.history.replace('/authors');
                                }}>
                                    {(createAuthor, {loading, error}) => {
                                        if (loading) {
                                            return (<div>Loading authors...</div>);
                                        }
                                        if (error) {
                                            return (`Error! ${error.message}`);
                                        }
                                        return (
                                            <form id="create-author" className="form-horizontal" onSubmit={e => {
                                                e.preventDefault();
                                                createAuthor({
                                                    variables: {
                                                        name: this.state.name,
                                                        age: this.state.age
                                                    }
                                                })
                                            }}>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-3">Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="name" placcholder="Name"
                                                               className="form-control" required
                                                               onChange={e => this.setState({name: e.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-3">Age</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="age" placcholder="Age"
                                                               className="form-control" required
                                                               onChange={e => this.setState({age: e.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-3"></label>
                                                    <div className="col-sm-9">
                                                        <button className="btn btn-success btn-lg">Save</button>
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
                <Footer/>
            </div>
        )
    }
}

export default Create;