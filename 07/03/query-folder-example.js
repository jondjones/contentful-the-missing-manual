export const GET_ALL_BLOGS = gql`
    query Blogs {
            blogCollection {
                items {
                    tag
                    title
                    publishDate
                    decription
                }
            }
        }`
