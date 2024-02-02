import Offers from "../components/offers/Offers";
import WhyUs from "../components/why-choose-us/WhyUs";
import Faq from "./Faq";

export default function page() {
    return (
        <>
            <div className="flex items-center justify-start small:justify-center small:pl-0 py-32 pl-28 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl font-bold z-50 small:text-3xl">Our Services</h1>
            </div>
            <Offers props={{head:"our services"}} />
            <WhyUs />
            <Faq />
        </>
    )
}
