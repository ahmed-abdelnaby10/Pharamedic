import AboutUs from "./components/aboutUS/AboutUs";
import Categories from "./components/categories/Categories";
import Landscape from "./components/Landscape";
import Membership from "./components/membership/Membership";
import Offers from "./components/offers/Offers";
import Pharmacist from "./components/pharmacist/Pharmacist";
import Testimonials from "./components/testimonials/Testimonials";
import WhyUs from "./components/why-choose-us/WhyUs";

export default async function Home() {
  return (
    <main className="relative">
      <Landscape />
      <Categories />
      <AboutUs />
      <Offers props={{head:"what we offer"}} />
      <WhyUs />
      <Membership />
      <Pharmacist />
      <Testimonials />
    </main>
  )
}
