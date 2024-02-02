import Image from "next/image";
import doctors from "@/public/docs.png"
import Link from "next/link";

export default function Landscape() {
    return (
        <div className={`bg-pharma-shop bg-center bg-no-repeat bg-cover flex px-4 pt-4 rounded-xl relative before:content-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:rounded-xl before:bg-bg-color/50 meduim:flex-col meduim:gap-5 small:flex-col small:gap-5 justify-between extralarge:px-20 mx-5 smallerThanLarge:mx-3`}>
            <div className="self-center z-10 flex flex-col justify-start gap-7 meduim:pr-4 meduim:text-center small:px-1.5 small:text-center extralarge:basis-1/3">
                <h1 className="text-6xl text-white font-bold whitespace-normal xlarge:text-5xl large:text-4xl meduim:text-4xl small:text-xl">Delivering Care, One Prescription At A Time</h1>
                <p className="text-base text-white whitespace-normal small:text-sm">Aenean gravida nibh consectetur mollis montes mi ridiculus vitae ac suspendisse sollicitudin.</p>
                <div className="flex gap-2 small:flex-col small:items-center small:self-center small:flex-1">
                    <Link href="/products" className="h-fit w-fit py-2 px-5 text-center bg-btn-color border border-solid border-btn-color rounded-md hover:border-white hover:bg-white hover:text-bg-color duration-300 meduim:basis-1/2 small:w-60">Shop Online</Link>
                    <Link href="/#pharmacist" className="h-fit w-fit py-2 px-5 text-center text-white border border-solid border-white rounded-md hover:border-bg-color hover:bg-bg-color duration-300 meduim:basis-1/2 small:w-60">Consultation</Link>
                </div>
            </div>
            <div className="z-10 flex justify-end overflow-hidden meduim:self-center small:self-center extralarge:justify-start">
                <Image
                    src={doctors}
                    alt="pic"
                    className="extralarge:w-w500"
                    width={800}
                    height={400}
                />
            </div>
        </div>
    )
}