import { gql } from 'apollo-boost'
const getBooksQuery = gql`
	{
		bookList {
			id
			title
			generic
			author {
				id
				name
			}
		}
	}
`

const createBookMutation = gql`
	mutation createBook($title: String!, $generic: String!, $authorId: Int!) {
		createBook(title: $title, generic: $generic, authorId: $authorId) {
			book {
				id
				title
			}
		}
	}
`


const getBookQuery = gql`
	query book($id: Int) {
		book(id: $id) {
			id
			title
			generic
			author {
				id
				name
				age
				books {
					id
					title
					generic
				}
			}
		}
	}
`

export { getBooksQuery, createBookMutation, getBookQuery }
