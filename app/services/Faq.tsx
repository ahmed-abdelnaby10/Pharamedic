'use client'

import Link from "next/link";
import { FaRegCommentDots } from "react-icons/fa";
import Questions from "./Questions";

export default function Faq() {
    return (
        <div id="faq" className="bg-overlay4 flex items-center justify-between rounded-xl mx-5 extralarge:mx-32 mb-16 small:mb-5 xlarge:-mt-28 large:-mt-20 meduim:-mt-20 xxxlarge:-mt-9 small:mx-1.5 small:-mt-2 px-12 pt-20 smallerThanLarge:py-5 smallerThanLarge:flex-col small:px-1">
            <div className="flex flex-col items-start justify-start gap-5 basis-2/5 mr-5 smallerThanLarge:mr-0 smallerThanLarge:items-center smallerThanLarge:text-center smallerThanLarge:pb-5 small:m-0 small:gap-2.5">
                <p className="uppercase text-hover-color text-sm">f.a.q</p>
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                <p className="text-txt-color text-sm leading-6">Dignissim quisque aliquam facilisi neque dolor cras. Hac ridiculus felis in sapien phasellus maximus facilisi.</p>
                <Link href="/" className="flex items-center gap-1 text-white bg-hover-color text-base font-semibold w-fit h-fit py-2 px-5 rounded-lg hover:bg-bg-color duration-300">
                    <FaRegCommentDots/>Ask Us Anything
                </Link>
            </div>
            <Questions />
        </div>
    )
}
