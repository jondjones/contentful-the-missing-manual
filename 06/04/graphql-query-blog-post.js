query($preview: Boolean){
    blogPostCollection(preview: $preview) {
        items {
            title
        }
    }
}