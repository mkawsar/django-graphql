import { gql } from 'apollo-boost';

export const USERS_QUERY = `
    query {
        users {
            id
            firstName
            username
            email
        }
    }
`;
