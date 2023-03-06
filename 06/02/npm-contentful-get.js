
const contentful = require("contentful"); const client = contentful.createClient({
    space: "SPACE_ID",
    accessToken: "ACCESS_TOKEN_ID"
});

client
    .getEntry("ENTRY_ID")
    .then(entry => console.log(entry))
    .catch(error => console.log(error));