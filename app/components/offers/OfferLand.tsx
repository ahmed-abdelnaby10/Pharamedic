'use client'
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import Statistics from "./Statistics";

export default function OfferLand() {
    return (
        <div className="bg-land-2 bg-cover bg-left-center bg-no-repeat relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-for-lands before:z-10 w-full flex flex-col items-start justify-between gap-9 pt-24 pr-32 text-start smallerThanLarge:pt-12 large:pr-16 meduim:pr-16 small:px-8 mt-9 mb-28 large:mb-44 meduim:mb-40 small:mb-36 pb-32 smallerThanLarge:pb-40 pl-[50%] large:pl-[34%] meduim:pl-[34%]">
            <p className="text-btn-color font-semibold z-20">THE BEST PHARMACY STORE</p>
            <h1 className="font-bold text-4xl text-white z-20 meduim:text-3xl small:text-2xl">We Have The Most Complete Medicine and Vitamins</h1>
            <p className="text-sm text-f6 z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Link href="/products" className="rounded-lg bg-btn-color text-black w-fit px-4 py-2 hover:bg-white hover:text-hover-color z-20 
            duration-300 flex items-center justify-between gap-2">Shop Now <span className="text-sm"><FaCaretRight/></span></Link>
            <Statistics />
        </div>
    )
}