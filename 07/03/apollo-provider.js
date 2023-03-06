import { withApollo } from 'next-with-apollo';
import { Httplink } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from '@utils/contentfulApolloClient';

export default withApollo(Page => {

    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState)
        return (
          <ApolloProvider client={client}>
            <PageComponent {...pageProps} />
          </ApolloProvider>
        )
      }