const posts =
await client.getEntries({
    content_type: 'post',
    limit: 1000,
});