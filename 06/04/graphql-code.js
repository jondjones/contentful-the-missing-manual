import gql from "graphql-tag";

const GET_BLOGS = gql`
    query Blogs {
        blogsCollection {
            items {
                datePosted
                sys {
                    id
                }
                title
            }
        }
    }
`;

export { GET_POSTS };