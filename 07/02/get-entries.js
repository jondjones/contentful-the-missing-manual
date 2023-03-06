const { createClient } = require('contentful');

export default async function fetchMultipleItems(
            contentType = 'page',
            skip = 0,
            previous = [],
            preview = false) {

    const contentfulClient = getClient();

    const query = Object.assign(
        query,
        {
            skip,
            limit: MAX_RESULTS
        });

    return contentfulClient.getEntries(query) .then((res) => {

        const entries = previous.concat(res.items);
        const nextSkip = res.skip + MAX_RESULTS;

        if (nextSkip < res.total) {

            const entriesToRequest = skip + MAX_RESULTS;

            return fetchMultipleItems(query,entriesToRequest, entries);
        }

        return entries;
);
