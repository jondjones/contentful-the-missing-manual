module.exports = function (migration, { makeRequest }) {

    const newsItem = migration.editContentType('news');

    newsItem
        .createField('newTitle')
        .name('Title') .type('Text');

    migration.transformEntries({
        contentType: 'news',
        from: ['title'],
        to: ['newTitle'],
        transformEntryForLocale: async (from, currentLocale) => {
            return {
                newTitle: from.title
            }
        }
    });

    newsItem.editField('title').disabled(true);
}