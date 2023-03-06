async function fetchGraphQL(query, preview = false) {

    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;
    const accessToken = getAccessToken(preview);

    const res = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({ query })
        });

    const { data } = await res.json(); return data;
}


function getAccessToken (preview) {
    return preview ?
        process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN;
}
