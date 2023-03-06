import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextContent } from "contentful";

export interface RichTextProps {
        content?: RichTextContent;
    }

export function RichText(props: RichTextProps) {
    return <div>
        {documentToReactComponents(props.content as any)}
    </div>
}