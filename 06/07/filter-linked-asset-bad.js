const SEARCH_VALUE = 'News';
const LINKED_CONTENT_TYPE = 'category_name';

client.getEntries({
        'content_type': 'blog',
        'fields.slug': SLUG})
      .then(blogs => {
        return client.getEntries({
            'content_type': LINKED_CONTENT_TYPE,
            'fields.name[match]': blogs.items[0].sys.id});
});