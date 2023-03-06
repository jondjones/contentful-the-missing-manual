

export async function getStaticPaths() {
    const posts = await getMultiplePags("blog");
    const paths = posts.map((post) => ({
        params: {
            pageId: post.sys.id
        }})
    );

    return {
        paths
    }
}