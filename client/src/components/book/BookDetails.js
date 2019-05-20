import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from './Query'

class BookDetails extends Component {
    getDisplayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.generic}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this authors:</p>
                    <ul id="other-books">
                        {book.author.books.map(item => {
                            return (
                                <li key={item.id}>{item.title}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No book selected.....</div>
            )
        }
    }

    render() {
        return (
            <div id="book-details">
                {this.getDisplayBookDetails()}
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
