import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";

export default function ReachUs() {
    return (
        <div className="flex flex-col justify-between gap-5 grow h-full">
            <h2 className="text-lg font-semibold">Reach Us</h2>
            <div className="flex flex-col justify-between gap-5 grow h-full">
                <ul className="list-none flex flex-col gap-3 items-start">
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-bg-color text-lg small:text-base"><FaGlobe/></div>
                        <p className="text-txt-color text-base small:text-sm">789 Oak St, Smalltown, TX 23456</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-bg-color text-lg small:text-base"><FaEnvelope/></div>
                        <p className="text-txt-color text-base small:text-sm">info@yourdomain.com</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-bg-color text-lg small:text-base"><FaPhone/></div>
                        <p className="text-txt-color text-base small:text-sm">(555) 987-6543</p>
                    </li>
                </ul>
                <div className="flex items-center justify-start gap-2 mt-2 small:mt-0 small:self-center">
                    <Link href="/" className="w-10 h-10 text-lg bg-hover-color rounded-md flex items-center justify-center hover:bg-facebook 
                    text-white duration-300 small:w-8 small:h-8 small:text-sm"><FaFacebookF/></Link>
                    <Link href="/" className="w-10 h-10 text-lg bg-hover-color rounded-md flex items-center justify-center hover:bg-insta 
                    text-white duration-300 small:w-8 small:h-8 small:text-sm"><FaInstagram/></Link>
                    <Link href="/" className="w-10 h-10 text-lg bg-hover-color rounded-md flex items-center justify-center hover:bg-twitter 
                    text-white duration-300 small:w-8 small:h-8 small:text-sm"><FaTwitter/></Link>
                    <Link href="/" className="w-10 h-10 text-lg bg-hover-color rounded-md flex items-center justify-center hover:bg-linkedIn 
                    text-white duration-300 small:w-8 small:h-8 small:text-sm"><FaLinkedinIn/></Link>
                </div>
            </div>
        </div>
    )
}
