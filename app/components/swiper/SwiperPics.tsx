import Image, { StaticImageData } from "next/image";

type Props = {
    props: {
        altText: string,
        source: StaticImageData,
    }
}

export default function SwiperPic({ props: {altText, source} }: Props) {
    return (
        <Image
            src={source}
            alt={altText}
            width={300}
            height={100}
            style={{
                width:"auto",
                height:"auto",
                maxWidth:"240px",
                maxHeight:"80px",
                minWidth:"180px",
                minHeight:"60px",
            }}
        />
    )
}
