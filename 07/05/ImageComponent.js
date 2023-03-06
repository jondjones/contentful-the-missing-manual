import Image from "next/image";
import { contentfulLoader } from "@delicious-simplicity/next-image-contentful-loader";

const ImageComponent =  ({ image }) => {
    return (
        <>
            <Image
                loader={(props) => contentfulLoader(props, { fit: "crop", ar: "1:1" })}
                src={image?.fields?.file?.url}
                alt={image?.fields?.title} width={image.fields?.width}
                height={image?.fields?.height} />
        </>);
}