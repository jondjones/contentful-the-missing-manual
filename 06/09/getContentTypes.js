const contentful = require('contentful');

const client = contentful.createClient();
const response = await client.getContentTypes();