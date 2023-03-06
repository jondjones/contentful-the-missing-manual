graphql `query ContentFulPost($slug: String, $locale: String) {
    contentfulPost(path: { eq: $slug },
        node_locale: { eq: $locale })
        {
            path
            node_locale
            title
        }
    }`