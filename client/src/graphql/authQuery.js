import {gql} from "apollo-boost";

export const AUTH_LOGIN_MUTATION = gql`
    mutation tokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`;

export const USER_REGISTRATION_MUTATION = gql`
    mutation createUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
        createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
            user{
                id,
                firstName
            }
        }
    }
`;
