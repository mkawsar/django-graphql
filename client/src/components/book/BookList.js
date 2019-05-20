import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from './Query'
import BookDetails from './BookDetails'

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
			<div>
				<ul id="book-list">
					{this.displayBooks()}
				</ul>
				<BookDetails bookId={this.state.selected} />
			</div>
		)
	}
}

export default graphql(getBooksQuery)(BookList);
