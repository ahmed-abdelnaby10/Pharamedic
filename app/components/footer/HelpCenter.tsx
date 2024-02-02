import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function HelpCenter() {
    return (
        <div className="flex flex-col justify-between gap-5 grow h-full">
            <h2 className="text-lg font-semibold">Help Center</h2>
            <ul className="flex flex-col gap-2.5 list-none small:text-end">
                <li className="flex items-center gap-2 ">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300 small:text-left">Help Center</Link>
                </li>
                <li className="flex items-center gap-2 ">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300 small:text-left">Ticket Support</Link>
                </li>
                <li className="flex items-center gap-2 ">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300 small:text-left">Our Locations</Link>
                </li>
                <li className="flex items-center gap-2 ">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/contact-us" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300 small:text-left">Contact US</Link>
                </li>
                <li className="flex items-center gap-2 ">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/services/#faq" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300 small:text-left">FAQ</Link>
                </li>
            </ul>
        </div>
    )
}