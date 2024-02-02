import reviwer1 from "@/public/Testimonials-1.jpg"
import reviwer2 from "@/public/Testimonials-2.jpg"
import reviwer3 from "@/public/Testimonials-3.jpg"
import Reviewer from "./Reviewer"

export default function Testimonials() {
    return (
        <div id="testimonials" className="relative flex flex-col items-center text-center gap-5 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-blur before:bg-cover before:bg-center-center before:bg-no-repeat before:blur-0 before:saturate-0 before:contrast-100 before:brightness-100 before:hue-rotate-0 bg-f6 before:opacity-20 xxxlarge:p-24 xlarge:p-16 large:px-8 meduim:px-6 small:px-2 smallerThanLarge:py-5">
            <p className="text-base text-hover-color uppercase z-30">Testimonials</p>
            <h1 className="text-4xl font-bold z-30">What Our Customer are Saying</h1>
            <p className="text-txt-color text-base z-30 xxxlarge:w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic eos sequi autem, sint nam Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div className="select-none flex items-center justify-center gap-10 xlarge:gap-5 small:gap-5 z-30 mt-5 smallerThanLarge:flex-col">
                <div className="bg-white rounded-3xl shadow-3xl flex flex-col items-center justify-center gap-5 py-6 px-7 border border-solid 
                border-white hover:border-hover-color text-center duration-300 large:w-3/5 meduim:w-2/3 small:w-full">
                    <p className="text-3xl text-hover-color">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className="text-txt-color text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti eius amet dolor accusamus nulla laboriosam earum similique, magnam optio eum! Eos labore nam voluptate.</p>
                    <Reviewer props={{source:reviwer1, name:"Willber Shore", job:"Accounting"}} />
                </div>
                <div className="bg-white rounded-3xl shadow-3xl flex flex-col items-center justify-center gap-5 py-6 px-7 border border-solid 
                border-white hover:border-hover-color text-center duration-300 large:w-3/5 meduim:w-2/3 small:w-full">
                    <p className="text-3xl text-hover-color">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className="text-txt-color text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti eius amet dolor accusamus nulla laboriosam earum similique, magnam optio eum! Eos labore nam voluptate.</p>
                    <Reviewer props={{source:reviwer2, name:"Willber Shore", job:"Accounting"}} />
                </div>
                <div className="bg-white rounded-3xl shadow-3xl flex flex-col items-center justify-center gap-5 py-6 px-7 border border-solid 
                border-white hover:border-hover-color text-center duration-300 large:w-3/5 meduim:w-2/3 small:w-full">
                    <p className="text-3xl text-hover-color">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className="text-txt-color text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti eius amet dolor accusamus nulla laboriosam earum similique, magnam optio eum! Eos labore nam voluptate.</p>
                    <Reviewer props={{source:reviwer3, name:"Willber Shore", job:"Accounting"}} />
                </div>

            </div>
        </div>
    )
}
