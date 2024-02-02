import barnd1 from "@/public/Brand-1.png"
import barnd2 from "@/public/Brand-2.png"
import barnd3 from "@/public/Brand-3.png"
import barnd4 from "@/public/Brand-4.png"
import barnd5 from "@/public/Brand-5.png"
import SwiperPic from "./SwiperPics";


export default function Swiper() {
    return (
        <div className="relative mt-20 small:mt-8 mx-auto z-30 w-full flex justify-between overflow-hidden smallerThanLarge:flex-wrap smallerThanLarge:justify-center">
            <SwiperPic props={{source:barnd1, altText:"brand1"}} />
            <SwiperPic props={{source:barnd2, altText:"brand2"}} />
            <SwiperPic props={{source:barnd3, altText:"brand3"}} />
            <SwiperPic props={{source:barnd4, altText:"brand4"}} />
            <SwiperPic props={{source:barnd5, altText:"brand5"}} />
        </div> 
    )
}
