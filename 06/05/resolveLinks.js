const contentful = require("contentful");

const client = contentful.createClient({
    accessToken: "<you-access-token>",
    space: "<your-space-id>",
    resolveLinks: false
});