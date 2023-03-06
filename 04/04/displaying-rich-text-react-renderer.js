import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const MyComponent = (props) => {

    const { fields } = props;

    return (
        <>
            {documentToReactComponents(item.title)}
        </>
)}