import { GET_BLOGS } from "../lib/queries";
import { useQuery } from "@apollo/react-hooks";

const MyComponent = () => {

    const { loading, data, error } = useQuery(GET_BLOGS);

    if (loading && !data) {
        // Do something
    }

    return (
        data.blogsCollection.items.map((blog) => {
            return (
                <>{blog.sys.id}</>
            );
        })
    )
};