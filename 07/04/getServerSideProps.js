export default BlogPost = ({ page }) => {

    if (!page) {
        // Throw 404 error, etc...
    }

    return (
        <>
            ${page.title}
        </>
    )
}

export async function getServerSideProps(context) {

    const slug = context.params.id;
    const page = await getSinglePage({ slug});

    return {
        props: { page },
    };
}