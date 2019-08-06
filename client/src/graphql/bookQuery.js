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