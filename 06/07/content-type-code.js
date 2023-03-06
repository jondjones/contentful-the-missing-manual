client.getEntries({content_type: "blog-posts" })
      .then(response => {
        return response.items;
      });