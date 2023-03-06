import Image from 'next/image'

export default function Home() {
    return (
        <Image
            src={prop.fields.image.fields.file.url}
            alt={prop.fields.image.fields.title}
            width={500}
            height={500}
            priority />)
}