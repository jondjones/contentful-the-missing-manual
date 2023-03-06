import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MyPage = () => {
    const data = useStaticQuery(
        graphql`{
            allContentfulAsset {
                nodes {
                    contentful_id
                    title
                    description
                }
            }
        }`);

        return (
            <>
            {data.allContentfulAsset.nodes.map(node => {
                return (
                    <div>
                        {node.title}
                    </div>)
            })}
            </>)
};

export default MyPage