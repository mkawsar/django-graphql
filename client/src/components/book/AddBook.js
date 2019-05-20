import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery } from '../author/Query'
import { createBookMutation, getBooksQuery } from '../book/Query'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            generic: '',
            authorId: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    getDisplayAuthors() {
        const data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (
                <option disabled>Loading Authors</option>
            )
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            });
        }
    }


    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    submitAddBookForm(e) {
        e.preventDefault();
        this.props.createBookMutation({
            variables: {
                title: this.state.title,
                generic: this.state.generic,
                authorId: parseInt(this.state.authorId)
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
        this.state.title = '';
        this.state.generic = '';
        this.state.authorId = '';
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitAddBookForm.bind(this)} className="form-horizontal">
                <div className="form-group">
                    <label>Book Name: </label>
                    <input type="text" className="form-control" name="title" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Generic: </label>
                    <input type="text" className="form-control" name="generic" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Author: </label>
                    <select name="authorId" className="form-control" onChange={this.handleInputChange}>
                        <option>Select An Author</option>
                        {this.getDisplayAuthors()}
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-success btn-circle pull-right">+</button>
                </div>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(createBookMutation, { name: 'createBookMutation' })
)(AddBook);
