const SEARCH_VALUE = 'News';
const LINKED_CONTENT_TYPE = 'category_name';

client.getEntries({
        'content_type': 'CONTENT_TYPE',
        'fields.category.sys.contentType.sys.id': LINKED_CONTENT_TYPE,
        'fields.category.fields.name[match]': CATEGORY})
      .then(entries => entries.items);