export async function getStaticProps({ params: { blogId } })
{
    const { post } = await getSinglePage(blogId);
    return {
        props: {
            posts
        }
    }
}
