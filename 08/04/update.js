const client = contentful.createClient({ accessToken: 'YOUR_ACCESS_TOKEN'});

client.getSpace('YOUR_SPACE_ID')
      .then((space) => {
        space.getContentType('YOUR_TYPE') .then((contentType) => {
        contentType.title = 'New title'

        contentType.update().then((update) => {
            console.log('Done!')
        })
    })
})
