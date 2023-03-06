import apolloClient from '@utils/contentfulApolloClient';

MyComponent.getInitialProps = async ({ apolloClient }) => {

    const { data, loading, error } = await apolloClient.query({
        query: MY_QUERY,
    });

    return {
        data,
        loading,
        error,
    }
}