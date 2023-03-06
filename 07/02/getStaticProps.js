export async function getStaticProps({preview = false}) {

    let homepageData =
        (await getSingleItem('home', preview))
        ?? [];

    return {
        props: {
            preview,
            homepageData
        }
    }
}