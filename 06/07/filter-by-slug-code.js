const SLUG = "/blog/post-1";

client.getEntries({
        'content_type': 'CONTENT_TYPE',
        'fields.slug': SLUG
       })
       .then(entries => entries.items);