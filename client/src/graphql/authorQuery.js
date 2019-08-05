import {gql} from "apollo-boost";

export const AUTHORS_QUERY = gql`
    query {
        authors {
            id
            name
            age
        }
    }
`;

export const CREATE_AUTHOR_MUTATION = gql`
    mutation createAuthor($name: String!, $age: String!) {
        createAuthor(name: $name, age: $age) {
            author {
                name
            }
        }
    }
`;

export const AUTHOR_DETAILS_QUERY = gql`
    query author($id: Int!) {
        author(id: $id) {
            id
            name
            age
        }
    }
`;