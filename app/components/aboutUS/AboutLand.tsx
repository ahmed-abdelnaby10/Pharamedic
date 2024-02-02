import Link from "next/link";

export default function AboutLand() {
    return (
        <div className="bg-land-1 bg-cover bg-center-center bg-no-repeat relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-for-lands before:z-10 w-full flex flex-col items-center justify-between gap-9 py-24 px-32 text-center smallerThanLarge:py-12 large:px-16 meduim:px-12 small:px-4 my-9">
            <p className="text-btn-color font-semibold z-20">WE&apos;RE THE PHARAMEDIC</p>
            <h1 className="font-bold text-4xl text-white z-20 meduim:text-3xl small:text-2xl">Delivering Wellness with Every Prescription</h1>
            <p className="text-sm text-f6 z-20">Euismod sapien eros mus imperdiet commodo tellus luctus. Eleifend ultrices primis litora turpis nisl donec euismod habitant erat dolor.</p>
            <Link href="/about" className="rounded-lg bg-btn-color text-black w-fit px-4 py-2 hover:bg-white hover:text-hover-color z-20 duration-300">Discover More</Link>
        </div>
    )
}
