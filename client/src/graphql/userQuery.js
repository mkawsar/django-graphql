import { gql } from 'apollo-boost';

export const USERS_QUERY = gql`
    query {
        users {
            id
            firstName
            username
            email
        }
    }
`;
