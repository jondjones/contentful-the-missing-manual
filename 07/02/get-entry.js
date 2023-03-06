const { createClient } = require('contentful');

export default async function fetchSingleItem({
                contentType = 'page',
                preview = false}) {

    const contentfulClient = getContentfulClient(preview);

    const response = await contentfulClient
                            .getEntry({content_type: contentType})
                            .then((response) => {
                                return response?.items;
                            });

    function getContentfulClient(preview = false) {

        const accessToken = preview ?
            process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

        const spaceId =  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID

        const contentfulClient = createClient({
                                    space: spaceId,
                                    accessToken: accessToken
                                });

        return contentfulClient;
    }
}