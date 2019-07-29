import { gql } from "apollo-boost";

export const AUTH_LOGIN_MUTATION = gql`
    mutation tokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`;
