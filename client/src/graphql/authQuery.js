import { gql } from "apollo-boost";

export const AUTH_LOGIN = gql`
    mutation tokenAuth($username: String!, $password: String!) {
        tokenAuth(username: 'mkawsar', password: '123456') {
            token
        }
    }
`;
