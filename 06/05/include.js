const blogs = await client.getEntries({
    content_type: "blogPosts",
    include: 2
});
