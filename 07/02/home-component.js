export default function Home({homepageData}) {
    return (
        <>
            {homepageData.map((post) =>
                <div key={post.sys.id}>
                    {post.title}
                </div>
            )}
        </>
    )
}