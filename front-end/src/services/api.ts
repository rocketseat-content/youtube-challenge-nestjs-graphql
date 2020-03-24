import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  // request: (operation) => {
  //   operation.setContext(({ headers = {} }) => ({
  //     headers: {
  //       ...headers,
  //       authorization: `Bearer ${bearerToken}`,
  //     },
  //   }));
  // },
});
