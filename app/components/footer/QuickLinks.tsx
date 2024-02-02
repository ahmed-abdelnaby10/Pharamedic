import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function QuickLinks() {
    return (
        <div className="flex flex-col justify-between gap-5 grow h-full">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="flex flex-col gap-2.5 list-none">
                <li className="flex items-center gap-2">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/about" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300">About Us</Link>
                </li>
                <li className="flex items-center gap-2">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300">LeaderShip</Link>
                </li>
                <li className="flex items-center gap-2">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/services" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300">Services</Link>
                </li>
                <li className="flex items-center gap-2">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/products" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300">products</Link>
                </li>
                <li className="flex items-center gap-2">
                    <div className="text-hover-color text-sm"><FaPlus/></div>
                    <Link href="/" className="text-txt-color text-base small:text-sm hover:text-hover-color duration-300">Legal Notice</Link>
                </li>
            </ul>
        </div>
    )
}
