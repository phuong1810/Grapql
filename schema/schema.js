import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Book{
        id: ID
        name: String
        genre: String
    }

    type Author {
        id: ID!
        name: String
        age: Int
    }

    type AlbumList {
        id: ID!
        name: String
        thumbnailUrl: String
    }
    #Root type
    type Query{
        books: [Book]
        authors: [Author]
        albumList: [AlbumList]
    }
`;

export {typeDefs}