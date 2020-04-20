import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { apolloApi } from 'api/apolloApi';

const apolloClient = (token) => {
  const link = new HttpLink({
    uri: apolloApi,
    headers: {
      Authorization: `Bearer ${token}`,
      'x-hasura-admin-secret': 'secret', // make env variable
    },
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};

export default apolloClient;
