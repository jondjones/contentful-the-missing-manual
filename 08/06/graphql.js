graphql`
    query ContentFulPosts($locale: String) {
        allContentfulPost(filter: {
            node_locale: { eq: $locale } }) {
                nodes {
                    contentful_id
                    title
                    path
                }
            }
        }
    }`;