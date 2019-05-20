import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from './Query'
import BookDetails from './BookDetails'
import AddBook from './AddBook'

class BookList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: null
		}
	}

	displayBooks() {
		const data = this.props.data;
		if (data.loading) {
			return (
				<div>Loading</div>
			)
		} else {
			return data.bookList.map(book => {
				return (
					<li key={book.id} onClick={(e) => this.setState({ selected: book.id })}>{book.title}</li>
				)
			})
		}
	}

	render() {
		return (
			<div className="col-sm-12">
				<div className="col-sm-3">
					<AddBook />
				</div>
				<div className="col-sm-6">
					<ul id="book-list">
						{this.displayBooks()}
					</ul>
				</div>
				<div className="col-sm-3">
					<BookDetails bookId={this.state.selected} />
				</div>
			</div>
		)
	}
}

export default graphql(getBooksQuery)(BookList);
