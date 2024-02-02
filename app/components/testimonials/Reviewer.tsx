import Image, { StaticImageData } from "next/image";

type Props = {
    props: {
        source: StaticImageData,
        name: string,
        job: string,
    }
}

export default function Reviewer({props: {source, name, job}}: Props) {
    return (
        <div className="flex items-center justify-center gap-5">
            <Image
                src={source}
                alt="testimonial"
                className="rounded-full w-14 h-14"
            />
            <div className="flex flex-col justify-center items-center gap-1 text-center">
                <h1 className="text-base font-semibold">{name}</h1>
                <p className="text-txt-color text-sm">{job}</p>
            </div>
        </div>
    )
}
