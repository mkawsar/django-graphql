import { gql } from 'apollo-boost'
const getAuthorsQuery = gql`
	{
        authors {
            id
            name
        }
    }
`

export { getAuthorsQuery };
