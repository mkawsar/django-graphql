import React, {Component} from 'react';
import Footer from "../lib/Footer";
import {NavLink} from "react-router-dom";
import {Query, Mutation} from "react-apollo";
import {
    AUTHORS_QUERY,
    CREATE_BOOK_MUTATION,
    BOOK_LIST_QUERY
} from '../../graphql';
import NotificationStore from "react-mobx-notification-system";

class Create extends Component {
    componentDidMount() {
        document.title = 'Book Create';
    }


    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Book Create</h2>
                                <NavLink to="/books">Book List</NavLink>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 features-box wow">
                                <Mutation mutation={CREATE_BOOK_MUTATION} onCompleted={res => {
                                    NotificationStore.addNotification({
                                        title: 'Create',
                                        message: 'Book created is successfully!',
                                        level: 'success'
                                    });
                                    this.props.history.replace('/books');
                                }} refetchQueries={() => {
                                    return [{
                                        query: BOOK_LIST_QUERY
                                    }]
                                }}>
                                    {(createBook, {loading, error}) => {
                                        if (loading) {
                                            return (<div>Loading...</div>);
                                        }
                                        if (error) {
                                            return (`Error! ${error.message}`);
                                        }
                                        return (
                                            <form className="form-horizontal" onSubmit={e => {
                                                e.preventDefault();
                                                createBook({
                                                    variables: {
                                                        title: this.state.title,
                                                        generic: this.state.generic,
                                                        authorId: this.state.authorId
                                                    }
                                                })
                                            }}>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-3">Title</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="title" placcholder="Tile"
                                                               className="form-control" required
                                                               onChange={e => this.setState({title: e.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label col-sm-3">Generic</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="generic" placcholder="Generic"
                                                               className="form-control" required
                                                               onChange={e => this.setState({generic: e.target.value})}/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label col-sm-3">Author</label>
                                                    <Query query={AUTHORS_QUERY}>
                                                        {({loading, error, data}) => {
                                                            if (loading) {
                                                                return (<div>Loading...</div>);
                                                            }
                                                            if (error) {
                                                                return (`Error! ${error.message}`);
                                                            }
                                                            return (
                                                                <div className="col-sm-9">
                                                                    <select className="form-control" name="authorId"
                                                                            onChange={e => this.setState({authorId: e.target.value})}>
                                                                        <option>Select an option</option>
                                                                        {data.authors.map(author => (
                                                                            <option value={author.id}
                                                                                    key={author.id}>{author.name}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )
                                                        }}
                                                    </Query>
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
        );
    }
}

export default Create;