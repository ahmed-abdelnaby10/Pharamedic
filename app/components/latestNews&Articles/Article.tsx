import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FaCalendarAlt, FaUser } from "react-icons/fa"

type Props = {
    props: {
        source: StaticImageData,
        head: string,
        paragraph: string,
        author: string,
        date: string,
        abbreviation: string,
    }
}

export default function Article({props: {source, head, paragraph, author, date, abbreviation}}: Props) {
    return (
        <div className="flex justify-between gap-5 small:gap-2.5 rounded-xl py-5 small:p-1.5 px-2.5 bg-white shadow-3xl xlarge:flex-col small:flex-col">
            <div className="rounded-lg w-1/2 h-full xlarge:w-full small:w-full">
                <Image
                    src={source}
                    alt="article"
                    className="rounded-lg object-cover object-center-center h-full"
                />
            </div>
            <div className="flex flex-col justify-start gap-2.5 w-1/2 xlarge:w-full small:w-full py-1.5">
                <h2 className="text-sm font-semibold text-hover-color border-b border-solid border-hover-color w-fit">{head}</h2>
                <h1 className="text-lg font-semibold">{paragraph}</h1>
                <div className="flex justify-between gap-16 items-center text-sm">
                    <div className="text-txt-color">
                        <div className="inline-block mr-1"><FaUser/></div> by <span className="text-base text-hover-color font-semibold">{author}</span>
                    </div>
                    <p className="text-txt-color"><div className="inline-block mr-1"><FaCalendarAlt/></div>{date}</p>
                </div>
                <p className="text-txt-color text-sm my-2.5 small:m-0 small:text-center">{abbreviation}...</p>
                <Link href="/" className="w-fit h-fit text-white bg-hover-color py-1.5 px-4 font-semibold text-base rounded-lg hover:bg-bg-color duration-300 small:self-center">Read More</Link>
            </div>
        </div>
    )
}
