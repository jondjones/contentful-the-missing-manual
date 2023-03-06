query($preview: Boolean) {
    entryCollection(preview: $preview) {
        items {
            sys {
                id,
                spaceId,
                environmentId
            }
        }
    }
}