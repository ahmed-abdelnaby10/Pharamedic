import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo_Pharamedic_1.png"

export default function CopyRight() {
    return (
        <div className="flex justify-between items-center meduim:flex-col small:flex-col bg-bg-color p-2.5 meduim:gap-2 small:gap-2 extralarge:px-32">
            <ul className="flex items-center justify-center gap-2 list-none large:gap-1 moreThanLarge:gap-2.5 small:gap-0 small:w-full">
                <li className="h-fit w-fit small:basis-1/3 small:text-center small:border-r border-solid border-hover-color">
                    <Link href="/" className="text-white text-xs border-solid border-hover-color border-r pr-2 small:border-none small:p-0 large:pr-1 moreThanLarge:pr-2.5 hover:text-hover-color duration-300">Terms of Services</Link>
                </li>
                <li className="h-fit w-fit small:basis-1/3 small:text-center small:px-2 small:border-r border-solid border-hover-color">
                    <Link href="/" className="text-white text-xs border-solid border-hover-color border-r pr-2 small:border-none small:p-0 large:pr-1 moreThanLarge:pr-2.5 hover:text-hover-color duration-300">Privacy Policy</Link>
                </li>
                <li className="h-fit w-fit small:basis-1/3 small:text-center small:px-2">
                    <Link href="/" className="text-white text-xs hover:text-hover-color duration-300">Cookies Policy</Link>
                </li>
            </ul>
            <div className="bg-white w-fit px-2 py-3 rounded-lg flex items-center justify-center meduim:w-full small:w-full moreThanLarge:px-10">
                <Image
                    src={Logo}
                    alt="Pharamedic Logo"
                    className="h-8 w-44 large:w-36 large:h-7"
                />
            </div>
            <p className="text-white text-xs small:text-center">Copyright &#169; 2024 Pharamedic by Ahmed Abdelnaby</p>
        </div>
    )
}
