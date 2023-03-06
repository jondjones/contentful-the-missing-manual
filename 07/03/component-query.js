import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'; import withApollo from '@utils/contentfulApolloClient';
const QUERY = gql`DEFINE-QUERY`;

const Index = () => {

    const { loading, data } = useQuery(QUERY);

    if (loading || !data) {
        return <h1>loading...</h1>;
    }

    return <div>{data.title}</div>;
};

export default withApollo(Index);