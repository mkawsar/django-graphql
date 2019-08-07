import {gql} from "apollo-boost";

export const BOOK_LIST_QUERY = gql`
    query {
        bookList {
            id
            title
            generic
        }
    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation createBook($title: String!, $generic: String!, $authorId: Int!) {
        createBook(title: $title, generic: $generic, authorId: $authorId) {
            book {
                id
            }
        }
    }
`;