import Image from "next/image";
import doctor from "@/public/pharmacist.jpg"
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Swiper from "../swiper/Swiper";
import AboutLand from "./AboutLand";

export default function AboutUs() {
    return (
        <>
            <div className="relative mx-9 small:mx-4 extralarge:mx-28 mt-20 meduim:mt-16 small:mt-8 bg-plus bg-30 bg-center-center before:content-[''] before:bg-overlay before:bg-transparent before:absolute before:left-0 before:top-0 before:w-full before:h-full">
                <div className="flex justify-center relative smallerThanLarge:flex-col-reverse gap-14 small:gap-8">
                    <div className="relative moreThanLarge:w-2/4 small:mx-1">
                        <Image
                            src={doctor}
                            alt="doctor"
                            className="rounded-xl w-full h-h420 object-cover object-center-center shadow-xl smallerThanLarge:h-h500"
                        />
                        <ul className=" bg-hover-color rounded-xl list-none px-5 py-3.5 absolute -left-4 -bottom-4 flex flex-col gap-2">
                            <li className="text-btn-color flex justify-start items-center gap-2 border-b border-solid border-white/20 pb-2">
                                <FaCheck/>
                                <span className="text-white text-sm">Green Lab</span>
                            </li>
                            <li className="text-btn-color flex justify-start items-center gap-2 border-b border-solid border-white/20 pb-2">
                                <FaCheck/>
                                <span className="text-white text-sm">General Medicine</span>
                            </li>
                            <li className="text-btn-color flex justify-start items-center gap-2 border-b border-solid border-white/20 pb-2">
                                <FaCheck/>
                                <span className="text-white text-sm">Free Delivery</span>
                            </li>
                            <li className="text-btn-color flex justify-start items-center gap-2">
                                <FaCheck/>
                                <span className="text-white text-sm">Pharmacy Support</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-between items-start z-20 gap-3 moreThanLarge:w-2/4 small:items-center">
                        <p className=" text-bg-color text-sm">WHO WE ARE</p>
                        <h1 className=" text-3xl font-bold small:text-center small:text-2xl">We Are The Most Trusted Pharmacy In This Town</h1>
                        <p className="text-txt-color small:text-center">Phasellus eu duis parturient ut ipsum. Nibh natoque platea venenatis egestas vel litora neque.</p>
                        <p className="text-txt-color text-sm small:text-justify small:text-last">Ullamcorper magna euismod aliquam dui at mollis risus imperdiet ac. Lorem consequat egestas si hac venenatis pharetra per metus arcu sem. Sodales duis eget bibendum sapien imperdiet si conubia nullam. Morbi sollicitudin fermentum ornare pulvinar massa auctor sapien augue.</p>
                        <Link href="/about" className="text-white bg-hover-color rounded-lg px-4 py-2 small:px-3 small:py-1.5 small:text-sm w-fit duration-300 
                        hover:bg-bg-color">More About Us</Link>
                    </div>
                </div>
                <Swiper />
            </div>
            <AboutLand />
        </>
    )
}
