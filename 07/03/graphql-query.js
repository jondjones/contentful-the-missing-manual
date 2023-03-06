const preview = false;

const entries = await fetchGraphQL (
    `query {
        blogsCollection(order: date_DESC) {
            items {
                title,
                slug,
                body
            }
        }`,
        preview
    );

// ACCESSING CONTENT
entries?.data?.blogsCollection?.item