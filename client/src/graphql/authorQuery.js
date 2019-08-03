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