import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import FormData from "../components/membership/Form";
import LatestNews from "../components/latestNews&Articles/LatestNews";

export default function page() {
    return (
        <>
            <div className="flex items-center justify-start small:justify-center small:pl-0 py-32 pl-28 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl font-bold z-50 small:text-3xl">Contact Us</h1>
            </div>
            <div id="customer-services" className="flex extralarge:p-28 items-start justify-center gap-10 py-10 px-5 small:px-0 xlarge:gap-2.5 smallerThanLarge:flex-col smallerThanLarge:items-center">
                <div className="flex flex-col items-start justify-start gap-5 py-5 small:py-0 pr-10 smallerThanLarge:pr-0 small:mx-1 smallerThanLarge:items-center">
                    <h1 className="text-4xl font-bold small:text-2xl small:text-center">We’d love to hear from you</h1>
                    <p className="text-txt-color text-sm smallerThanLarge:text-center">Our partners are also sad with ease. Diam rhoncus accumsan just the arrows of the earth of the disease. For pure grief is born of hatred in the time of care, and the housework is done.</p>
                    <div className="flex small:flex-col items-center justify-between gap-5 large:gap-0 meduim:gap-0 small:gap-5 my-4 smallerThanLarge:w-full smallerThanLarge:justify-start small:items-start">
                        <div className="flex flex-col items-start justify-start gap-2.5 border-r border-dotted border-ddd pr-5 smallerThanLarge:basis-1/3 pl-5 small:border-r-0 small:border-b small:pb-5 small:w-full">
                            <div className="text-3xl text-hover-color flex items-center justify-start hover:scale-125 duration-300 hover:rotate-12"><FaGlobe/></div>
                            <h2 className="text-xl font-semibold">Headquarters</h2>
                            <p className="text-sm text-txt-color">789 Oak St, Smalltown, TX 23456</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2.5 border-r border-dotted border-ddd pr-5 smallerThanLarge:basis-1/3 pl-5 small:border-r-0 small:border-b small:pb-5 small:w-full">
                            <div className="text-3xl text-hover-color flex items-center justify-start hover:scale-125 duration-300 hover:rotate-12"><FaPhone/></div>
                            <h2 className="text-xl font-semibold">Call Us</h2>
                            <p className="text-sm text-txt-color">+1555.987.6543</p>
                            <p className="text-sm text-txt-color">+1555.987.6541</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2.5 smallerThanLarge:basis-1/3 pl-5 small:w-full">
                            <div className="text-3xl text-hover-color flex items-center justify-start hover:scale-125 duration-300 hover:rotate-12"><FaEnvelope/></div>
                            <h2 className="text-xl font-semibold">E-mail Us</h2>
                            <p className="text-sm text-txt-color">info@yourdomain.com</p>
                            <p className="text-sm text-txt-color">hello@yourdomain.com</p>
                        </div>
                    </div>
                    <div className="w-full rounded-xl h-96">
                        <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/place/Noury+Khattab+Mosque/@30.0529919,31.3219128,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e5f3b3428cb:0xbcc5b58696871a30!8m2!3d30.0529873!4d31.3267837!16s%2Fg%2F1pp2vb757?authuser=0&entry=ttu"></iframe>
                    </div>
                </div>
                <FormData props={{header:"Send us a message", paragraph:"Class dolor et facilisi nibh taciti efficitur egestas. Praesent in commodo fringilla hendrerit nulla lacinia.", labelOne:"Name", labelTwo:"Phone", labelThree:"E-mail", labelFour:"Subject", labelFive:"Message", buttonName:"Send Message"}} />
            </div>
            <LatestNews />
        </>
    )
}
