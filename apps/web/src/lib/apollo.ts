import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://app.clarke.fornecedores.listaperfeita.com/graphql',
  cache: new InMemoryCache(),
});
