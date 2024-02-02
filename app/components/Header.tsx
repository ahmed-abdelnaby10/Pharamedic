import Link from 'next/link'
import { FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneVolume, FaClock } from 'react-icons/fa'

export default function Header() {
    return (
        <>
            <div className="bg-bg-color text-sm text-white flex justify-between extralarge:px-32 p-3.5 select-none">
                <div className="flex gap-5 small:gap-3">
                    <Link href="/" className="hover:text-facebook"><FaFacebookF/></Link>
                    <Link href="/" className="hover:text-twitter"><FaTwitter/></Link>
                    <Link href="/" className="hover:text-linkedIn"><FaLinkedinIn/></Link>
                    <Link href="/" className="hover:text-insta"><FaInstagram/></Link>
                </div>
                <ul className="flex list-none items-center">
                    <li className="flex justify-center items-center gap-1 pr-4 small:pr-1.5 h-fit hover:text-hover-color duration-300">
                        <Link href="https://www.yahoo.com/yourname" className="m-0 p-0 text-xs flex items-center gap-1"><FaEnvelope/> <p className="head m-0 p-0 text-xs small:hidden meduim:hidden">yourname@yahoo.com</p></Link>
                    </li>
                    <li title='(555)-454-45454' className="flex justify-center items-center gap-1 px-4 small:px-1.5 h-fit border-x border-x-hover-color  hover:text-hover-color duration-300">
                        <FaPhoneVolume/>
                        <p className="head m-0 p-0 text-xs small:hidden meduim:hidden">(555)-454-45454</p>
                    </li>
                    <li title='Mon - Sat : 08.00-21.00' className="flex justify-center items-center gap-1 pl-4 small:pl-1.5 h-fit  hover:text-hover-color duration-300">
                        <FaClock/>
                        <p className="head m-0 p-0 text-xs small:hidden meduim:hidden">Mon - Sat : 08.00-21.00</p>
                    </li>
                </ul>
            </div>
        </>
    )
}