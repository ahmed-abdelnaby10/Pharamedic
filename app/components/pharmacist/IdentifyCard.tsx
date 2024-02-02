import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

type Props = {
    props: {
        sourc: StaticImageData,
        name: string,
        job: string,
        facebook: string,
        twitter: string,
        linkedin: string,
        instagram: string,
    }
}

export default function IdentifyCard({props: {sourc, name, job, facebook, twitter, linkedin, instagram}}: Props) {
    return (
        <div className="relative rounded-lg group">
            <Image
                src={sourc}
                alt="pharmacist"
                className="rounded-lg"
            />
            <div className="absolute bg-white w-11/12 py-1.5 h-fit left-1/2 -translate-x-1/2 rounded-lg border-b-6 border-solid border-hover-color -bottom-5 text-center z-30">
                <h1 className="text-lg text-bg-color font-medium">{name}</h1>
                <p className="text-base text-txt-color">{job}</p>
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 items-end justify-center pb-20 gap-2.5 bg-bg-color/50 rounded-lg absolute top-0 left-0 w-full h-full duration-300">
                <Link href={facebook} className="w-9 h-9 text-sm bg-white rounded-md flex items-center justify-center text-facebook 
                hover:bg-bg-color hover:text-white duration-300"><FaFacebookF/></Link>
                <Link href={instagram} className="w-9 h-9 text-sm bg-white rounded-md flex items-center justify-center text-insta 
                hover:bg-bg-color hover:text-white duration-300"><FaInstagram/></Link>
                <Link href={twitter} className="w-9 h-9 text-sm bg-white rounded-md flex items-center justify-center text-twitter 
                hover:bg-bg-color hover:text-white duration-300"><FaTwitter/></Link>
                <Link href={linkedin} className="w-9 h-9 text-sm bg-white rounded-md flex items-center justify-center text-linkedIn 
                hover:bg-bg-color hover:text-white duration-300"><FaLinkedinIn/></Link>
            </div>
        </div>
    )
}
