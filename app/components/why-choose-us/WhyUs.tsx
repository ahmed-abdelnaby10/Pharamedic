import Image from "next/image";
import Reason from "./Reason";
import expert from "@/public/a-pharmacyexpert.jpg"

export default function WhyUs() {
    return (
        <div className="flex justify-between gap-16 mx-5 small:mx-1.5 extralarge:mx-28 large:mx-20 smallerThanLarge:flex-col smallerThanLarge:items-center mt-36 mb-20 small:mb-16 meduim:gap-12 small:gap-0">

            <div className="flex flex-col items-start justify-start gap-5 small:gap-3 moreThanLarge:w-3/5 py-5">
                <p className="uppercase text-hover-color text-sm smallerThanLarge:text-center small:self-center">why choose us</p>
                <h1 className="text-4xl font-bold small:text-xl small:self-center small:text-center">We care beyond what your doctors have prescribed</h1>
                <p className="text-txt-color text-base small:text-sm small:self-center small:text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ul className="list-none flex flex-col items-start justify-between gap-0 divide-y divide-solid divide-eee">
                    <Reason props={{header:"Honesty & transparency", paragraph:"Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros."}} />
                    <Reason props={{header:"Expert Pharmcist", paragraph:"Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros."}} />
                    <Reason props={{header:"Extra Discount", paragraph:"Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros."}} />
                </ul>
            </div>


            <div className="rounded-xl relative shadow-3xl h-h600 large:h-h800 meduim:h-h800 moreThanLarge:w-2/5 smallerThanLarge:w-full">
                <Image
                    src={expert}
                    alt="a pharmacy expert"
                    className="flex rounded-xl w-full h-full shadow-xl object-cover object-top"
                />
                <div className="flex items-center justify-between rounded-xl shadow-xl absolute w-w430 xlarge:w-w400 -bottom-7 -right-3.5 small:right-0 bg-white overflow-hidden h-min small:w-60">
                    <span className="flex items-center h-32 font-bold text-4xl px-5 bg-btn-color text-center small:text-2xl small:px-3 small:h-32">15+</span>
                    <div className="h-full w-fit p-5 small:p-2">
                        <h1 className="text-xl font-bold mb-5 small:text-lg small:mb-1">Years Experience</h1>
                        <p className="text-txt-color text-sm text-nowrap">Accumsan nibh vel integer eget auctor per maecenas himenaeos.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
