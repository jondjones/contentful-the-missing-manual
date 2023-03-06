const contentful = require('contentful');

const client = contentful.createClient({});
const asset = await client.getAsset('ASSET_ID');