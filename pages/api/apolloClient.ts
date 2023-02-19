import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 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` 
    }
  }
})


export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});