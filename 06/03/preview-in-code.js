const contentful = require('contentful');

const client = contentful.createClient({
    space: 'SPACE_ID',
    accessToken: 'PREVIEW_ACCESS_TOKEN',
    host: 'preview.contentful.com'
});
