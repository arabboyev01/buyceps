import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache(),
});

export const GET_ALL_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      types
    }
  }
`;